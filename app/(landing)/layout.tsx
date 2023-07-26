const LandingLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="h-screen bg-blue-700 overflow-auto">
        <div className="mx-auto max-w-screen-xl h-full w-full">
            {children}
        </div>
    </main>
  )
}

export default LandingLayout