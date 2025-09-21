import Card from "@/components/Card"

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      {/* Using the component multiple times! */}
      <Card />
      <Card />
      <Card />
    </div>
  )
}
export default Landing