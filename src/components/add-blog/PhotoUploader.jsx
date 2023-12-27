export default function PhotoUploader({ setPhoto }) {
  return (
    <div className="h-[180px] border border-dashed border-darkGray rounded-[12px] mb-[24px]
            flex flex-col justify-center items-center relative gap-2 bg-lightGray mt-[8px]">
        <img src="/folder-add.svg" alt="upload the image here" />
        <div>
            <span className="text-sm text-darkGray mr-[5px]">ჩააგდეთ ფაილი აქ ან</span>
            <span className="text-sm text-black underline cursor-pointer">
            <input 
                className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer" 
                type="file" 
                accept="image/*"
                name="photo" 
                id="photo" 
                onChange={(e) => setPhoto(e.target.files[0])}/>აირჩიეთ ფაილი</span>
        </div>
    </div>
  )
}