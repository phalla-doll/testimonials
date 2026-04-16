import { Plus, Star } from "lucide-react";
import Image from "next/image";

interface Review {
  id: string;
  topType: "author" | "quote";
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  quote: string;
}

const reviews: Review[] = [
  {
    id: "review-1",
    topType: "author",
    author: {
      name: "James Carter",
      role: "Wilson & Co",
      avatar: "https://picsum.photos/seed/james/100/100",
    },
    quote:
      "Incredible team! They delivered exactly what we needed, on time and beyond expectations.",
  },
  {
    id: "review-2",
    topType: "quote",
    author: {
      name: "Emily Davis",
      role: "StartUp Hub",
      avatar: "https://picsum.photos/seed/emily/100/100",
    },
    quote: "A smooth process from start to finish. Highly professional team!",
  },
  {
    id: "review-3",
    topType: "author",
    author: {
      name: "Anna Martinez",
      role: "Marketing Director",
      avatar: "https://picsum.photos/seed/anna/100/100",
    },
    quote:
      "Our new branding is exactly what we envisioned—clean, modern, and unique. #1 in our industry.",
  },
];

export default function Page() {
  return (
    <div className="bg-[#F2F2EF] min-h-screen p-2 sm:p-4 md:p-6 lg:p-8 flex justify-center font-sans">
      <div className="w-[100%] max-w-[1600px] p-6 lg:p-14 xl:p-20 overflow-hidden">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
          <div className="flex justify-start items-start pt-2 lg:pt-4">
            <div className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[2px] font-semibold text-[#666]">
              <Plus className="w-4 h-4" strokeWidth={1.5} />
              Testimonials
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 lg:-ml-1">
            <h2 className="text-[4rem] sm:text-[6rem] xl:text-[8.5rem] font-[300] leading-[1.1] tracking-[-2px] text-[#1A1A1A] m-0">
              Experiences.
            </h2>
            <p className="text-[12px] uppercase tracking-[3px] font-semibold mt-3 xl:mt-4 text-[#888]">
              © 2025 // Edition
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8 items-stretch auto-rows-fr">
          
          {/* Card 1: Stats */}
          <div className="bg-[#E6E6E3] rounded-[2px] p-6 xl:p-8 flex flex-col justify-between shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-black/5 h-full min-h-[460px]">
            <div className="flex items-start gap-3 xl:gap-4">
              <div className="flex items-baseline shrink-0">
                <span className="text-[4rem] xl:text-[5rem] font-[300] tracking-[-1px] leading-none text-[#1A1A1A]">
                  4.9
                </span>
                <span className="text-[10px] uppercase tracking-[1px] text-[#999] ml-2">
                  /5 Overall
                </span>
              </div>
              <p className="text-[13px] xl:text-[14px] text-[#555] font-normal leading-[1.6] pt-2 max-w-[200px]">
                We've delivered 56+ projects that help companies generate real results.
              </p>
            </div>

            <div className="mt-8 pt-4">
              <div className="text-[11px] uppercase tracking-[2px] font-semibold mb-4 text-[#888]">
                fabrica®
              </div>
              <div className="flex flex-col sm:flex-row xl:flex-row items-start sm:items-center xl:items-center gap-3 xl:gap-4 mb-8">
                <div className="flex items-center shrink-0">
                  {[1, 2, 3, 4].map((i) => (
                    <Image
                      key={`client-${i}`}
                      src={`https://picsum.photos/seed/client${i}/100/100`}
                      alt={`Client ${i}`}
                      width={36}
                      height={36}
                      className={`w-8 h-8 rounded-full border-[2px] border-[#E6E6E3] object-cover ${
                        i > 1 ? "-ml-2.5" : ""
                      }`}
                      style={{ zIndex: i * 10 }}
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full border-[2px] border-[#E6E6E3] -ml-2.5 bg-[#1A1A1A] text-white flex items-center justify-center text-[10px] font-medium z-50 relative">
                    56+
                  </div>
                </div>
                <div className="pt-1 sm:pt-0">
                  <div className="flex gap-[2px] text-[#1A1A1A] mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={`star-${i}`}
                        fill="currentColor"
                        className="w-[11px] h-[11px]"
                      />
                    ))}
                  </div>
                  <p className="text-[10px] uppercase tracking-[1px] text-[#999] font-medium leading-tight whitespace-nowrap">
                    Trusted globally
                  </p>
                </div>
              </div>

              <button className="w-full bg-[#1A1A1A] text-white rounded-none py-[16px] text-[12px] uppercase tracking-[2px] font-medium cursor-pointer border-none shadow-sm transition-opacity hover:opacity-90">
                Leave a review
              </button>
            </div>
          </div>

          {/* Cards 2, 3, 4 */}
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#E6E6E3] rounded-[2px] border border-black/5 flex flex-col h-full shadow-[0_30px_60px_rgba(0,0,0,0.05)] min-h-[460px]"
            >
              <div className="flex-1 border-b border-black/5 p-6 xl:p-8 flex flex-col justify-start">
                {review.topType === "author" ? (
                  <div className="flex items-center gap-4">
                    <Image
                      src={review.author.avatar}
                      alt={review.author.name}
                      width={48}
                      height={48}
                      className="w-10 h-10 xl:w-11 xl:h-11 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-[500] text-[13px] xl:text-[14px] text-[#1A1A1A] tracking-tight">
                        {review.author.name}
                      </div>
                      <div className="text-[10px] uppercase tracking-[1px] text-[#999] mt-1">
                        {review.author.role}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-[17px] xl:text-[19px] leading-[1.6] tracking-[-0.5px] font-[300] text-[#555] max-w-[280px]">
                    {review.quote}
                  </p>
                )}
              </div>

              <div className="flex-1 p-6 xl:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-[2px] text-[#1A1A1A]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={`bottom-star-${i}`}
                        fill="currentColor"
                        className="w-[12px] h-[12px]"
                      />
                    ))}
                  </div>
                  <Plus
                    className="w-4 h-4 text-[#888]"
                    strokeWidth={1.5}
                  />
                </div>
                
                <div className="mt-6">
                  {review.topType === "author" ? (
                    <p className="text-[17px] xl:text-[19px] leading-[1.6] tracking-[-0.5px] font-[300] text-[#555] max-w-[280px]">
                      {review.quote}
                    </p>
                  ) : (
                    <div className="flex items-center gap-4">
                      <Image
                        src={review.author.avatar}
                        alt={review.author.name}
                        width={48}
                        height={48}
                        className="w-10 h-10 xl:w-11 xl:h-11 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-[500] text-[13px] xl:text-[14px] text-[#1A1A1A] tracking-tight">
                          {review.author.name}
                        </div>
                        <div className="text-[10px] uppercase tracking-[1px] text-[#999] mt-1">
                          {review.author.role}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
