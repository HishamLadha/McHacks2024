import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Image, Text } from '@chakra-ui/react';


function InputForm() {
  return (
    <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              height={500}
            >
            

            <Stack>
              <CardBody>
                <Heading size='md' className='text-center'>Scan</Heading>

                <Text py='2'>
                  Caffè latte is a coffee beverage of Italian origin made with espresso
                  and steamed milk.Caffè latte is a coffee beverage of Italian origin made with espresso
                  and steamed milk.
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                  Buy Latte
                </Button>
              </CardFooter>
            </Stack>
          </Card>
  )
}

export default InputForm