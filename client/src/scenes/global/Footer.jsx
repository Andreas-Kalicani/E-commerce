import { useTheme } from "@mui/material"; 
import { Box, Typography } from "@mui/material"; 
import { shades } from "../../theme"; 

const Footer = () => {
    const { 
        palette: { neutral },

    } = useTheme();
    return <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
        <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
        >
            <Box width="clamp(20%, 30%, 40%)">
                <Typography 
                 variant="h4"
                 fontWeight="bold"
                 mb="30px" color={shades.secondary[500]}>ECOMMER
                </Typography>
                <div>
                Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                 Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis 
                 in faucibus orci luctus et ultrices posuere cubilia Curae; 
                 Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                    </div>    
            </Box>

            <Box>
            <Typography variant="h4" fontWeight="bold" mb="30px">
                About Us
            </Typography>
            <Typography mb="30px">Careers</Typography>
            <Typography mb="30px">Our Stores</Typography>
            <Typography mb="30px">Terms & Conditions</Typography>
            <Typography mb="30px">Privacy Policy</Typography>
            </Box>

            <Box>
            <Typography variant="h4" fontWeight="bold" mb="30px">
                Customer Care
            </Typography>
            <Typography mb="30px">Help Center</Typography>
            <Typography mb="30px">Track Your Order</Typography>
            <Typography mb="30px">Corporate & Bulk</Typography>
            <Typography mb="30px">Return & Refunds</Typography>
            </Box>

            <Box width="clamp(30%, 30%, 40%)">
            <Typography variant="h4" fontWeight="bold" mb="30px">
                Contact Us
            </Typography>
            <Typography mb="30px">50 north Whatever blvd, Washington, DC10501</Typography>
            <Typography mb="30px">Email: somethingsomething@gmail.com</Typography>
            <Typography mb="30px">(222)333-4444</Typography>
            
             
            </Box>
        </Box>

    </Box>
}

export default Footer; 