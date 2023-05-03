import "@fontsource/comic-neue/400.css";
import "@fontsource/comic-neue/700.css";
import { GlobalStyle } from "@styles/global-style";
import { ThemeProvider } from "@features";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
export function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default MyApp;
