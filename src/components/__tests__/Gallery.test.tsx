import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Gallery from '../Gallery';
import { vi, describe, test, expect, beforeEach } from 'vitest';

// Mock fetch for download functionality
const mockFetch = vi.fn();
window.fetch = mockFetch as unknown as typeof window.fetch;

// Mock URL methods with proper Vitest mock functions
const mockCreateObjectURL = vi.fn();
window.URL.createObjectURL = mockCreateObjectURL;

const mockRevokeObjectURL = vi.fn();
window.URL.revokeObjectURL = mockRevokeObjectURL;

describe('Gallery Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockFetch.mockReset();
    // Mock document.createElement for download functionality
    const mockLink = {
      href: '',
      download: '',
      click: vi.fn(),
    };
    document.createElement = vi.fn().mockImplementation((tag) => {
      if (tag === 'a') return mockLink;
      return document.createElement(tag);
    }) as unknown as typeof document.createElement;
    document.body.appendChild = vi.fn() as unknown as typeof document.body.appendChild;
    document.body.removeChild = vi.fn() as unknown as typeof document.body.removeChild;
  });

  // Happy Path: Component renders correctly
  test('renders gallery with correct number of images', () => {
    render(<Gallery />);
    
    // Check if the gallery title is rendered
    expect(screen.getByText('Media Gallery')).toBeInTheDocument();
    
    // Check if all images are rendered (12 photos in the data)
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(12);
  });

  // Happy Path: Modal opens when clicking on an image
  test('opens modal when clicking on an image', () => {
    render(<Gallery />);
    
    // Click on the first image
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);
    
    // Check if modal is open by looking for navigation buttons
    expect(screen.getByText('Urban Photography')).toBeInTheDocument();
    expect(screen.getByText('By John Smith')).toBeInTheDocument();
  });

  // Branching: Modal navigation works correctly
  test('navigates to next and previous images in modal', () => {
    render(<Gallery />);
    
    // Open the modal
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);
    
    // Initially shows first image
    expect(screen.getByText('Urban Photography')).toBeInTheDocument();
    
    // Navigate to next image
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    
    // Should show second image
    expect(screen.getByText('Nature Exploration')).toBeInTheDocument();
    
    // Navigate to previous image
    const prevButton = screen.getByRole('button', { name: /prev/i });
    fireEvent.click(prevButton);
    
    // Should show first image again
    expect(screen.getByText('Urban Photography')).toBeInTheDocument();
  });

  // Happy Path: Modal closes when clicking close button
  test('closes modal when clicking close button', () => {
    render(<Gallery />);
    
    // Open the modal
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);
    
    // Check if modal is open
    expect(screen.getByText('Urban Photography')).toBeInTheDocument();
    
    // Click close button
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    
    // Check if modal is closed
    expect(screen.queryByText('Download')).not.toBeInTheDocument();
  });

  // Exception Handling: Download functionality works correctly
  test('downloads image when clicking download button', async () => {
    // Mock successful fetch response
    const mockBlob = new Blob(['mock image data'], { type: 'image/jpeg' });
    mockFetch.mockResolvedValueOnce({
      blob: () => Promise.resolve(mockBlob),
    });
    mockCreateObjectURL.mockReturnValue('mock-url');

    render(<Gallery />);
    
    // Open the modal
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);
    
    // Click download button
    const downloadButton = screen.getByRole('button', { name: /download/i });
    fireEvent.click(downloadButton);
    
    // Wait for download to complete
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2400'
      );
      expect(mockCreateObjectURL).toHaveBeenCalledWith(mockBlob);
      expect(document.createElement).toHaveBeenCalledWith('a');

      // Get the mock link element
      const mockLink = document.createElement('a');
      expect(mockLink.download).toBe('urban-photography.jpg');
      expect(mockLink.click).toHaveBeenCalled();
      expect(document.body.removeChild).toHaveBeenCalled();
      expect(mockRevokeObjectURL).toHaveBeenCalledWith('mock-url');
    });
  });

  // Exception Handling: Download error is handled
  test('handles download error gracefully', async () => {
    // Mock console.error
    const originalConsoleError = console.error;
    console.error = vi.fn() as unknown as typeof console.error;
    
    // Mock failed fetch
    mockFetch.mockRejectedValueOnce(new Error('Network error'));
    
    render(<Gallery />);
    
    // Open the modal
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);
    
    // Click download button
    const downloadButton = screen.getByRole('button', { name: /download/i });
    fireEvent.click(downloadButton);
    
    // Wait for error to be logged
    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        'Error downloading media:',
        expect.any(Error)
      );
    });
    
    // Restore console.error
    console.error = originalConsoleError;
  });

  // Input Verification: Circular navigation works at boundaries
  test('navigates correctly at array boundaries', () => {
    render(<Gallery />);
    
    // Open the modal with first image
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);
    
    // Go to previous from first image (should wrap to last)
    const prevButton = screen.getByRole('button', { name: /prev/i });
    fireEvent.click(prevButton);
    
    // Should show last image
    expect(screen.getByText('Tropical Beach')).toBeInTheDocument();
    
    // Go to next from last image (should wrap to first)
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    
    // Should show first image again
    expect(screen.getByText('Urban Photography')).toBeInTheDocument();
  });
});