import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box,IconButton,List, } from "@mui/material";
import { Colors } from "../theme";


//container

export const AppBarContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2px 0px",
    fontWeight:"bold",
    position:"fixed",
    top: 0,
    zIndex:9999999,
    width:"100%",
    backgroundColor:"#fff",
    
}))

export const AdminAppBarContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2px 0px",
    fontWeight:"bold",
    position:"fixed",
    top: 0,
    zIndex:99,
    width:"100%",
    backgroundColor:"transparent",
    
}))

export const SubAppBarContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 0px",
    fontWeight:"bold",
    position:"fixed",
    top: 0,
    zIndex:99999,
    width:"100%",
    backgroundColor:"transparent",
    
}))

export const AppBarHeader=styled(Typography)(()=>({
    color:Colors.secondary,
    padding:"4px",
    fontWeight:"bold",
    fontSize:"30px",
    display:"flex",
    flexDirection:"row",
    zIndex:99,
    
}))

export const MyList=styled(List)(({type})=>({
    display: type=== 'row' ? "flex":"block",
    color:Colors.black,
    padding:"4px",
    fontWeight:"bold",
    fontSize:"20px",
    flexDirection:"row",
    flexGrow:5,
    textDecoration:"none",
    justifyContent:"center",
    alignItems:"center",
    zIndex:99,
}))

export const SubList=styled(List)(({type})=>({
    display: type=== 'row' ? "flex":"block",
    color:Colors.primary,
    // padding:"4px",
    fontWeight:"bold",
    fontSize:"20px",
    flexDirection:"row",
    textDecoration:"none",
    justifyContent:"start",
    alignItems:"center",
    zIndex:99,
    marginLeft:"20px",
    
}))


export const ActionIconContainerMobile=styled(Box)(()=>({
    display:"flex",
    position:"fixed",
    zIndex:99,
    width:"100%",
    alignItems:"center",
    bottom:0,
    borderTop:`1px solid white`

}))
;
export const ActionIconContainerDesktop=styled(Box)(()=>({
    flexGrow:0,
}))

export const DrawerCloseButton=styled(IconButton)(()=>({
  position:"absolute",
  top:10,
  left:250,
  zIndex:1999
}))

