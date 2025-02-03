import Image from 'next/image'

export default function Phrase({ src }: { src: string }) {
  return (
    <div className="flex items-center px-5 gap-5">
      <p className="text-[7.5vw]">Front End Developer</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image src={src} alt="image" fill />
      </span>
    </div>
  )
}
