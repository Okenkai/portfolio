'use client'
import styles from "./page.module.css";
import { NavigationProvider } from "@context/NavigationContext";
import { StepProvider } from "./context/StepContext";
import Home from "@views/home/Home"
import { StyledEngineProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
  key: 'css',
  prepend: true,
});

export default function Page() {

  return (
    <CacheProvider value={cache}>
      <StyledEngineProvider injectFirst>
        <main className={styles.main}>
          <NavigationProvider>
            <StepProvider>
              <Home />
            </StepProvider>
          </NavigationProvider>
        </main>
      </StyledEngineProvider>
    </CacheProvider>
  );
}
