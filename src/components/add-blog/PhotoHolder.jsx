export default function PhotoHolder({ photo, setPhoto }) {
  return (
    <div className="flex p-[18px] items-center gap-[12px] rounded-xl mt-[8px] mb-[24px] bg-[#F2F2FA]">
        <img src="/gallery.svg" alt="gallery icon" width="24px" />
        <span className="text-sm">{photo.name}</span>
        <img 
            className="ml-auto cursor-pointer" 
            onClick={() => setPhoto(null)}
            src="/x.svg" 
            alt="delete input" />
    </div>
  )
}