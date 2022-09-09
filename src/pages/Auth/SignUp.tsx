import {
  Input,
  Box,
  Text,
  Heading,
  Button,
  HStack,
  VStack,
  RadioGroup,
  Radio,
  Stack,
  Center
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

// Yup Form Validation Schema
const schema = yup
  .object({
    firstName: yup.string().required("This field is required"),
    middleName: yup.string().required("This field is required"),
    lastName: yup.string().required("This field is required"),
    email: yup.string().required("This field is required"),
    mobileNumber: yup.string().required("This field is required"),
    address: yup.string().required("This field is required"),
    dob: yup.string().required("This field is required"),
    userName: yup.string().required("This field is required"),
    // gender: yup.string().required("This field is required"),
  })
  .required();

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
const [value,setValue]=useState('male')
console.log("Radio",value)
  // Function called on Form submit
  const onSubmit = (data: any) => {
    console.log("form submitted", data);
    reset();
  };

  return (
    <Center bg="#C4C4C4" minHeight="100vh">
      <Box minWidth="515px" padding="40px" bg="#FFFFFF">
        <HStack spacing={8} marginBottom="28px">
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
        <Box marginBottom="28px">
          <Text color="#585858" fontSize="24px" fontWeight="400px">
            Registration
          </Text>
          <Text color="#585858" fontSize="xs" fontWeight="400px">
            Please kindly fill up the form*
          </Text>
        </Box>

        {/* handleSubmit will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack position="relative" spacing="20px" pb="28px">
            <Box>
              <Input
                minH="56px"
                disabled={false}
                placeholder="First Name"
                {...register("firstName")}
              />
                          <Text position="absolute" bottom="2px" color="red">
                              {errors.firstName?.message}
                          </Text>
            </Box>

            <Box>
              <Input
                minH="56px"
                disabled={false}
                placeholder="Middle Name"
                {...register("middleName")}
              />
              <Text position="absolute" bottom="2px" color="red">
                {errors.middleName?.message}
              </Text>
            </Box>

            <Box>
              <Input
                minH="56px"
                disabled={false}
                placeholder="Last Name"
                {...register("lastName")}
              />
              <Text position="absolute" bottom="2px" color="red">
                {errors.lastName?.message}
              </Text>
            </Box>
          </HStack>

          <HStack position="relative" spacing="20px" pb="28px">
            <Box width="50%">
              <Input
                minH="56px"
                disabled={false}
                placeholder="Email Address"
                {...register("email")}
              />
              <Text position="absolute" bottom="2px" color="red">
                {errors.email?.message}
              </Text>
            </Box>

            <Box width="50%">
              <Input
                minH="56px"
                disabled={false}
                placeholder="Mobile Number"
                {...register("mobileNumber")}
              />
              <Text position="absolute" bottom="2px" color="red">
                {errors.mobileNumber?.message}
              </Text>
            </Box>
          </HStack>

          <HStack position="relative" spacing="20px" pb="28px">
            <Box width="50%">
              <Input
                minH="56px"
                disabled={false}
                placeholder="Address"
                {...register("address")}
              />
              <Text position="absolute" bottom="2px" color="red">
                {errors.address?.message}
              </Text>
            </Box>

            <Box width="50%">
              <Input
                type="date"
                minH="56px"
                disabled={false}
                placeholder="Date Of Birth"
                {...register("dob")}
              />

              <Text position="absolute" bottom="2px" color="red">
                {errors.dob?.message}
              </Text>
            </Box>
          </HStack>

          <Box pb="28px" position="relative">
            <Input
              minH="56px"
              disabled={false}
              placeholder="User Name"
              {...register("userName")}
            />
            <Text position="absolute" bottom="2px" color="red">
              {errors.userName?.message}
            </Text>
          </Box>


                  <Controller
                      control={control}
                      name="radio"
                      render={({
                          field: { onChange, onBlur, value, name, ref },
                          fieldState: { invalid, isTouched, isDirty, error },
                          formState,
                      }) => (
                        //   <Checkbox
                        //       onBlur={onBlur} // notify when input is touched
                        //       onChange={onChange} // send value to hook form
                        //       checked={value}
                        //       inputRef={ref}
                        //   />
                          <RadioGroup position="relative" pb="32px" onChange={setValue} value={value}>
            <Text pb="12px">Gender</Text>
            <Stack direction="row">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="others">Others</Radio>
            </Stack>
            <Text position="absolute" bottom="2px" color="red">
              {errors.gender?.message}
            </Text>
          </RadioGroup>
                      )}
                  />



                  <RadioGroup position="relative" pb="32px" onChange={setValue} value={value}>
            <Text pb="12px">Gender</Text>
            <Stack direction="row">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="others">Others</Radio>
            </Stack>
            <Text position="absolute" bottom="2px" color="red">
              {errors.gender?.message}
            </Text>
          </RadioGroup>

          <Button width="100%" type="submit" marginBottom="52px">
            Register account
          </Button>
        </form>
        <HStack marginBottom="16px" justifyContent="center">
          <Text color="#585858" fontSize="14px" fontWeight="400px">
            Already have an account?
          </Text>
          <Text color="#003893" fontSize="14px" fontWeight="400px">
            <Link to="/login">Login</Link>
          </Text>
        </HStack>
        <Text
          color="#003893"
          fontSize="14px"
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

export default SignUp;
