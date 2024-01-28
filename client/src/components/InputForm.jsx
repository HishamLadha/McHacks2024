import React from 'react';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import { 
  Card, CardBody, CardFooter, Stack, Heading, Button, Text, Input, Checkbox, Wrap, WrapItem 
} from '@chakra-ui/react';

function InputForm() {
  const [isClicked, setisClicked] = useState(false);
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      height="auto"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        spacing={4}
        width="100%"
        align="center"
        justify="center"
        padding={4}
      >
        <CardBody>
          <Heading size='md' className='text-center'>
            Scan
          </Heading>
          <br />
          <form className="max-w-sm" style={{ margin: '0 auto' }}>
            <div className='mb-5'>
              <label htmlFor="ip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Start IP Address
              </label>
              <Input
                type="text"
                id="ip"
                placeholder="XXX.XXX.X.X"
                required
                width="full"
              />
            </div>
            <div className='mb-5'>
              <label htmlFor="ip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                End IP Address
              </label>
              <Input
                type="text"
                id="ip"
                placeholder="XXX.XXX.X.X"
                required
                width="full"
              />
            </div>
            <div className='flex justify-center pb-2'>
              Additional options: 
            </div>
            {/* Wrap component for options with checkboxes, allowing for wrapping */}
            <Wrap spacing="20px" justify="center">
              {/* Wrap each checkbox in a WrapItem for proper spacing */}
              <WrapItem><Checkbox value="option1">-sV</Checkbox></WrapItem>
              <WrapItem><Checkbox value="option2">-sC</Checkbox></WrapItem>
              <WrapItem><Checkbox value="option3">-T4</Checkbox></WrapItem>
              <WrapItem><Checkbox value="option4">-O</Checkbox></WrapItem>
              <WrapItem><Checkbox value="option5">-Pn</Checkbox></WrapItem>
              <WrapItem><Checkbox value="option6">-oA</Checkbox></WrapItem>
              {/* Add more checkboxes as needed */}
            </Wrap>
          </form>
        </CardBody>
        <CardFooter>
        <Button
        variant='solid'
        size='xs'
        height={90}
        width={150}
        borderWidth={2}
        borderColor={'grey'}
        backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFncVTCnbE2yxiW6KGNuLLmBJ7Nqqrhm1_-t919CJHYg&s')" // Assuming the image is in the public directory
        backgroundSize="cover" // Ensure the image covers the entire button
        backgroundPosition="center" // Center the image on the button
         // You might want to set a text color that contrasts well with your image
        _hover={{
          opacity: 0.85 // Optional: style for hover state
        }}
        onClick={() => setisClicked(true)}
      >
      </Button>

        </CardFooter>
        { isClicked && <>
          <div>
            <span className='font-medium text-md'>Running the following command:</span> <span className='text-md italic'>nmap -O -sV -T4 192.168.0.1/24</span>
          </div>
          <ProgressBar/>
          </>
        }
        
      </Stack>
    </Card>
  )
}

export default InputForm;
