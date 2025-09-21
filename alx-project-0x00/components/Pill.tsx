// 1. Import the interface
import { PillProps } from "@/interfaces";

// 2. & 3. Apply the interface and destructure the title prop
const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className=" flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
      {/* 4. Use the dynamic title prop */}
      <p className=" text-sm ">{title}</p>
    </div>
  )
}

export default Pill;