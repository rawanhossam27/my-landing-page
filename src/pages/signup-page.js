import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const iconYellow = "#D7A411";
const baseBackgroundColor = "#121212";

const yellowWithIncreasedOpacity = `rgba(${parseInt(iconYellow.slice(1, 3), 16)}, ${parseInt(iconYellow.slice(3, 5), 16)}, ${parseInt(iconYellow.slice(5, 7), 16)}, 0.3)`;

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

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
    router.push("/signedIn-page");
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign Up clicked");
  };

  if (!mounted) return null;

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
          <Text
            fontSize="2xl"
            fontFamily="Montserrat"
            color="#D7A411"
            fontWeight="bold"
            mb={6}
            textAlign="center"
          >
            Create Account
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

          {/* Confirm Password Input */}
          <Box style={inputWrapperStyle}>
            <Input
              name="new-confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              size="sm"
              {...inputStyle}
            />
            <Icon
              as={showConfirmPassword ? MdVisibility : MdVisibilityOff}
              onClick={handleShowConfirmPassword}
              style={iconStyle}
              fontSize="20px"
            />
          </Box>

          {/* Sign Up Button */}
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
            Sign Up
          </Button>

          {/* Divider */}
          <Box display="flex" alignItems="center" mb={6}>
            <Box flex="1" height="1px" backgroundColor="#D2AC71" />
            <Text
              fontFamily="Montserrat"
              fontWeight="400"
              fontSize="16px"
              color="#D7A411"
              mx={4}
            >
              or
            </Text>
            <Box flex="1" height="1px" backgroundColor="#D2AC71" />
          </Box>

          {/* Google Sign Up */}
          <Button
            onClick={handleGoogleSignUp}
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
            <Icon as={FcGoogle} boxSize={6} />
            Sign Up with Google
          </Button>

          {/* Login Link */}
          <Text fontSize="14px" color="black" textAlign="center" mt={4}>
            <span>Already have an account? </span>
            <Link
              href="/login-page"
              color="#007BFF"
              fontWeight="bold"
              textDecoration="underline"
            >
              Login
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
