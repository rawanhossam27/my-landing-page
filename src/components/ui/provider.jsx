'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ColorModeProvider } from './color-mode';

export function Provider({ children, ...props }) { // Accept children and other props
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props}>
        {children} {/* Render the children here! */}
      </ColorModeProvider>
    </ChakraProvider>
  );
}