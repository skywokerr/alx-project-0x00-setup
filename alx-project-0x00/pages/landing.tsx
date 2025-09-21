import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>
      
      {/* Original Card component */}
      <Card />
      
      {/* Button Demonstrations */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Button Components</h2>
        
        {/* Size Variations */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Size Variations:</h3>
          <div className="flex gap-4 items-center mb-3">
            <Button title="Small Button" size="small" />
            <Button title="Medium Button" size="medium" />
            <Button title="Large Button" size="large" />
          </div>
        </div>

        {/* Shape Variations */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Shape Variations:</h3>
          <div className="flex gap-4 items-center mb-3">
            <Button title="Slightly Rounded" shape="rounded-sm" />
            <Button title="Medium Rounded" shape="rounded-md" />
            <Button title="Fully Rounded" shape="rounded-full" />
          </div>
        </div>

        {/* Combined Variations */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Combined Variations:</h3>
          <div className="flex gap-4 items-center mb-3">
            <Button title="Small Pill" size="small" shape="rounded-full" />
            <Button title="Large Rounded" size="large" shape="rounded-md" />
            <Button 
              title="Custom Style" 
              size="medium" 
              shape="rounded-full"
              className="bg-green-500 hover:bg-green-600"
            />
          </div>
        </div>

        {/* Different Actions */}
        <div>
          <h3 className="font-medium mb-2">Different Actions:</h3>
          <div className="flex gap-4 items-center">
            <Button title="Primary Action" size="medium" />
            <Button 
              title="Secondary" 
              size="small" 
              className="bg-gray-500 hover:bg-gray-600"
            />
            <Button 
              title="Danger" 
              size="medium" 
              className="bg-red-500 hover:bg-red-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;