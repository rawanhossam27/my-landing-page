import { Box, Text, Flex, Input, Button, Icon, Link } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import React, { useState, useEffect } from "react";

const iconYellow = "#D7A411";
const baseBackgroundColor = "#121212";

const yellowWithIncreasedOpacity = `rgba(${parseInt(iconYellow.slice(1, 3), 16)}, ${parseInt(iconYellow.slice(3, 5), 16)}, ${parseInt(iconYellow.slice(5, 7), 16)}, 0.3)`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const inputStyle = {
    pr: "40px",
    borderRadius: "20px",
    backgroundColor: "transparent",
    color: "black",
    _focus: { boxShadow: "none", outline: "none" },
    border: "2px solid #D2AC71",
    pl: 4,
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: "16px",
    width: "100%",
  };

  const iconStyle = {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    cursor: "pointer",
    zIndex: "1",
    color: "#808080",
  };

  const inputWrapperStyle = {
    position: "relative",
    marginBottom: "16px",
  };

  const handleSubmit = () => {
    console.log("Form submitted:", { email, password });
  };

  const handleGoogleLogin = () => { //Renamed
    console.log("Google Sign In clicked");  //Renamed
  };

  if (!mounted) {
    return null;
  }

  return (
    <Box
      minH="100vh"
      bg={`linear-gradient(to bottom, ${baseBackgroundColor}, ${baseBackgroundColor} 80%, ${yellowWithIncreasedOpacity} 95%)`}
      px={8}
      py={12}
    >
      <Flex justify="center" align="center" minH="80vh">
        <Box
          as="form"
          autoComplete="off"
          bg="white"
          borderRadius="xl"
          p={10}
          boxShadow="lg"
          width={{ base: "100%", sm: "400px" }}
          color="black"
        >
          <Text fontSize="2xl" fontFamily="Montserrat" color="#D7A411" fontWeight="bold" mb={6} textAlign="center">
            Login
          </Text>

          {/* Email Input */}
          <Input
            name="new-email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            size="sm"
            {...inputStyle}
            mb={4}
          />

          {/* Password Input */}
          <Box style={inputWrapperStyle}>
            <Input
              name="new-password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              size="sm"
              {...inputStyle}
            />
            <Icon
              as={showPassword ? MdVisibility : MdVisibilityOff}
              onClick={handleShowPassword}
              style={iconStyle}
              fontSize="20px"
            />
          </Box>

          {/* Login Button */}
          <Button
            onClick={handleSubmit}
            bg="#D7A411"
            color="white"
            size="lg"
            width="100%"
            borderRadius="20px"
            _hover={{ bg: "#c7970f" }}
            fontFamily="Montserrat"
            fontWeight="bold"
            mb={6}
          >
            Login
          </Button>

          {/* Divider */}
          <Box display="flex" alignItems="center" mb={6}>
            <Box flex="1" height="1px" backgroundColor="#D2AC71" />
            <Text fontFamily="Montserrat" fontWeight="400" fontSize="16px" color="#D7A411" mx={4}>
              or
            </Text>
            <Box flex="1" height="1px" backgroundColor="#D2AC71" />
          </Box>

          {/* Google Login */}
          <Button
            onClick={handleGoogleLogin}
            bg="white"
            color="gray.600"
            size="lg"
            width="100%"
            borderRadius="20px"
            border="2px solid #D2AC71"
            _hover={{ bg: "#F2F2F2" }}
            fontFamily="Montserrat"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={3}
          >
            <Icon as={FcGoogle} boxSize={6} /> {/* Ensure the Google icon size is specified */}
            Login with Google
          </Button>
          

          {/* Sign Up Link */}
          <Text fontSize="14px" color="black" textAlign="center" mt={4}>
            <span>Don't have an account? </span>
            <Link href="/signup-page" color="#007BFF" fontWeight="bold" textDecoration="underline">  {/*Changed to /signup-page*/}
              Sign Up
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default LoginPage;
