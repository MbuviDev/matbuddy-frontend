export const getColor=(color)=>{
    
  switch (color) {
    
    case "green":
      return {
        bgColor: "bg-green-600",
        hoverBgColor: "hover:bg-green-500"}
        
        
    case "blue":
        return{
            bgColor: "bg-blue-600",
            hoverBgColor: "hover:bg-blue-500"}
            
            
    default:
        return{
            bgColor: "bg-red-600",
            hoverBgColor: "hover:bg-red-500"
        }
    }
}