// @refresh reload
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

const queryClient = new QueryClient({});

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Html lang="en">
        <Head>
          <Title>Anylytics</Title>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Body>
          <Suspense>
            <ErrorBoundary>
              {/* <A href="/">Index</A>
            <A href="/about">About</A> */}
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
          <Scripts />
        </Body>
      </Html>
    </QueryClientProvider>
  );
}
