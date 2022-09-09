import {
  Input,
  InputGroup,
  Center,
  Box,
  Text,
  Heading,
  InputRightElement,
  Button,
  Checkbox,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

// Yup Form Validation Schema
const schema = yup.object({
  email: yup.string().required("This field is required"),
  password: yup.string().required("This field is required"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [show, setShow] = useState(false);

  // Function to toggle password show state
  const handleClick = () => setShow(!show);

  // Function called onForm submit
  const onSubmit = (data: any) => {
    console.log("form submitted", data);
    reset();
  };

  return (
    <Center bg="#C4C4C4" minH="100vh">
      <Box minWidth="515px" p="40px" bg="#FFFFFF">
        <HStack spacing={8} mb="28px">
          <img src="" alt="logo" />
          <VStack align="left">
            <Heading color="#E34363" fontSize="20px" fontWeight="500">
              Goverment of Nepal
            </Heading>
            <Heading color="#E34363" fontSize="20px" fontWeight="500">
              Samridhi App
            </Heading>
          </VStack>
        </HStack>
        <Box mb="28px">
          <Text color="#585858" fontSize="24px" fontWeight="400px">
            Login
          </Text>
          <Text color="#585858" fontSize="xs" fontWeight="400px">
            Please login to the portal using user credential
          </Text>
        </Box>

        {/* handleSubmit will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box pb="28px" position="relative">
            <Input
              minH="56px"
              disabled={false}
              placeholder="Email address"
              {...register("email")}
            />
            <Text position="absolute" bottom="2px" color="red">
              {errors.email?.message}
            </Text>
          </Box>
          <Box position="relative" pb="28px">
            <InputGroup>
              <Input
                minHeight="56px"
                pr="4.5rem"
                {...register("password")}
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement minH="56px" w="4.5rem">
                <Button
                  h="1.75rem"
                  bg="transparent"
                  size="sm"
                  onClick={handleClick}
                >
                  {show ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text position="absolute" bottom="2px" color="red">
              {errors.password?.message}
            </Text>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            marginBottom="32px"
          >
            <Checkbox
              {...register("remember")}
              color="#585858"
              fontSize="14px"
              fontWeight="400px"
            >
              Remember me
            </Checkbox>
            <Text color="#003893" fontSize="14px" fontWeight="400px">
              <Link to="/forgotPassword">Forgot password?</Link>
            </Text>
          </Box>
          <Button width="100%" type="submit" mb="52px">
            Submit
          </Button>
        </form>
        <HStack marginBottom="16px" justifyContent="center">
          <Text color="#585858" fontSize={14} fontWeight={400}>
            Don't have an account?
          </Text>
          <Text color="#003893" fontSize="14px" fontWeight="400px">
            <Link to="/signUp">Register</Link>
          </Text>
        </HStack>
        <Text
          color="#003893"
          fontSize={14}
          fontWeight={400}
          display="flex"
          justifyContent="center"
        >
          Help me?
        </Text>
      </Box>
    </Center>
  );
};

export default Login;
