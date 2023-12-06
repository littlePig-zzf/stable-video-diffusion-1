import Predictions from './Components/Predictions'

export default function Home() {

  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-3xl">
        <div className="text-center">
          <h4 className="text-3xl font-semibold md:text-5xl text-black">Stable Video Diffusion</h4>
          <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
            <p className="text-[#636262]">Revolutionizing Video Generation with AI
              Use the free Stable Video Diffusion service at Stable-Video-Diffusion.site</p>
          </div>
        </div>
      </div>
      <div>
        <Predictions />
      </div>
      <div className="mb-8 justify-items-center gap-6 sm:justify-items-stretch md:mb-12 md:gap-8 lg:mb-16">
        <div className="relative mb-4 flex flex-col place-items-center justify-between gap-6 rounded-2xl dark:bg-slate-800 shadow-md  border-slate-200 border border-solid  bg-white px-12 pb-8 pt-16 max-[767px]:mt-4 md:mb-8  md:pb-8 md:pt-16 lg:mb-4">
          <div className="mb-4 flex flex-col items-center">
            <h6 className="font-semibold text-2xl">How to use</h6>
          </div>
          <p>To use Stable Video Diffusion for transforming your text into images and your images into videos, follow these simple steps:</p>
          <p className='text-left'>  <span className="text-base font-semibold">Step 1: Input Your Text</span> - After entering the text, the corresponding picture will be generated. Finally transform into a video.</p>
          <p>  <span className="text-base font-semibold">Step 2: Wait for the Video to Generate</span> - After generating the photo, the model will process it to generate a video. This process may take some time depending on the complexity and length of the video.</p>
          <p>  <span className="text-base font-semibold">Step 3: Download Your Video</span> - Once the video is generated, you will be able to download it. Check the quality and, if necessary, you can make adjustments or regenerate the video.</p>
          <p>  Note: Stable Video Diffusion is in a research preview phase and is mainly intended for educational or creative purposes. Please ensure that your usage adheres to the terms and guidelines provided by Stability AI.</p>
        </div>
      </div>
    </section>
  )
}
