import { Button } from "./components/ui/button";

const App = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-3">
        <div className="text-3xl font-bold">Hello World</div>
        <Button>Click me</Button>
      </div>
    </>
  );
};

export default App;
