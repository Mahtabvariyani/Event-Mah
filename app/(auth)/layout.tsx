
const Layout = ({children} : {children : React.ReactNode})=> {
return(
    <div className="bg-blue-950 h-[100vh] flex-center bg-dotted-pattern">
        {children}
    </div>
)
}

export default Layout