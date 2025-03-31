import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const photos: Media[] = [
  {
    url: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2400",
    title: "Urban Photography",
    photographer: "John Smith",
    type: "image"
  },
  {
    url: "https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&q=80&w=2400",
    title: "Nature Exploration",
    photographer: "Emma Wilson",
    type: "image"
  },
  {
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2400",
    title: "Travel Adventures",
    photographer: "Michael Brown",
    type: "image"
  },
  {
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2400",
    title: "Mountain Peaks",
    photographer: "Sarah Davis",
    type: "image"
  },
  {
    url: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80&w=2400",
    title: "Food Photography",
    photographer: "David Chen",
    type: "image"
  },
  {
    url: "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?auto=format&fit=crop&q=80&w=2400",
    title: "Architecture",
    photographer: "Lisa Taylor",
    type: "image"
  },
  {
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2400",
    title: "Foggy Mountains",
    photographer: "Alex Johnson",
    type: "image"
  },
  {
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=2400",
    title: "Forest Path",
    photographer: "Chris Martin",
    type: "image"
  },
  {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2400",
    title: "Sunset Coast",
    photographer: "Rachel Green",
    type: "image"
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2400",
    title: "Mountain Lake",
    photographer: "Tom Wilson",
    type: "image"
  },
  {
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2400",
    title: "Starry Night",
    photographer: "Kate Anderson",
    type: "image"
  },
  {
    url: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&q=80&w=2400",
    title: "Tropical Beach",
    photographer: "Mark Thompson",
    type: "image"
  }
];

interface Media {
  url: string;
  title: string;
  photographer: string;
  type: 'image' | 'video';
}

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const openModal = (index: number) => {
    setSelectedMedia(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
    document.body.style.overflow = 'unset';
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (selectedMedia === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedMedia - 1 + photos.length) % photos.length
      : (selectedMedia + 1) % photos.length;
    
    setSelectedMedia(newIndex);
  };

  const downloadMedia = async () => {
    if (selectedMedia === null) return;
    
    try {
      setIsDownloading(true);
      const media = photos[selectedMedia];
      const response = await fetch(media.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${media.title.toLowerCase().replace(/\s+/g, '-')}.${media.type === 'video' ? 'mp4' : 'jpg'}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading media:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <div className="relative bg-[#0a0225] py-32 overflow-hidden" id="gallery">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-red-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse-slow delay-300"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#17175b2e_1px,transparent_1px),linear-gradient(to_bottom,#17175b2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ff000012,transparent)]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-16">
            <Camera className="w-8 h-8 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Media Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {photos.map((media, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl"
                onClick={() => openModal(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {media.type === 'image' ? (
                    <img 
                      src={media.url}
                      alt={media.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500 ease-out"
                    />
                  ) : (
                    <video 
                      src={media.url}
                      className="w-full h-full object-cover"
                      muted
                      onMouseOver={e => e.currentTarget.play()}
                      onMouseOut={e => e.currentTarget.pause()}
                    />
                  )}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{media.title}</h3>
                    <p className="text-sm text-white/80">By {media.photographer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Modal View */}
      {isModalOpen && selectedMedia !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-50 p-2 bg-black/50 rounded-full backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateMedia('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-50 p-2 bg-black/50 rounded-full backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateMedia('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-50 p-2 bg-black/50 rounded-full backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Media Container */}
            <div className="w-full h-full flex flex-col items-center justify-center px-16 py-8">
              <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
                {photos[selectedMedia].type === 'image' ? (
                  <img
                    src={photos[selectedMedia].url}
                    alt={photos[selectedMedia].title}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  />
                ) : (
                  <video
                    src={photos[selectedMedia].url}
                    controls
                    className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
                  />
                )}
              </div>

              {/* Media Info */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md rounded-2xl p-6 text-white max-w-2xl w-full">
                <h3 className="text-2xl font-bold mb-2">{photos[selectedMedia].title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-white/80">By {photos[selectedMedia].photographer}</p>
                  <button 
                    onClick={downloadMedia}
                    disabled={isDownloading}
                    className={`flex items-center gap-2 ${
                      isDownloading 
                        ? 'bg-white/10 cursor-not-allowed' 
                        : 'bg-white/20 hover:bg-white/30'
                    } transition-colors px-4 py-2 rounded-lg`}
                  >
                    <Download className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
                    {isDownloading ? 'Downloading...' : 'Download'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}