import "./globals.css";

export const metadata = {

title:"Mind-Bending Thriller Movies",

description:"Psychological thriller recommendations"

};

export default function RootLayout({children}){

return(

<html>

<body>

{children}

</body>

</html>

)

}