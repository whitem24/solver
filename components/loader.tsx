import Image from "next/image"

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
        <div className="w-10 h-10 relative animate-bounce duration-2000">
            <Image 
                alt="loading"
                fill 
                src={"/images/logo1.png"}
            />
        </div>
        <div className="text-sm text-muted-foreground">
            Solving...
        </div>
    </div>
  )
}

export default Loader