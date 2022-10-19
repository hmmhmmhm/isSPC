import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";

declare const window: Window & Record<string, any>;

const ErrorPage: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.VANTA && ref.current) {
      window.VANTA.CLOUDS({
        el: ref.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
      });
    }
  }, [ref]);

  return (
    <>
      <Head>
        <title>isSPC</title>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          defer
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.clouds.min.js"
          integrity="sha512-OUuElnLHxMmJyQwXUuVsRtzhSzF2vISQGd+UngDFdr8Hiod96/S0g39+OyeLVbRi8bp+MG3HGe52++D2EO4qAg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          defer
        ></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.2.2/static/pretendard.css"
        />
      </Head>

      <div className="blankPage" ref={ref}>
        <p className="blankPage__code">준비중..</p>
        <p className="blankPage__message">개발이 현재 진행되고 있습니다...</p>
        <style jsx>{`
          * {
            font-family: Pretendard, -apple-system, BlinkMacSystemFont,
              system-ui, Roboto, "Helvetica Neue", "Segoe UI",
              "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif;
          }

          .blankPage {
            user-select: none;
            width: 100vw;
            height: 100vh;
            color: #4d586c;
            padding: 2.5rem;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            display: flex;
            background-color: #6abcff;
          }

          .blankPage__code {
            font-weight: 700;
            font-size: 4.5rem;
            line-height: 1;
            margin: 0;
          }

          .blankPage__message {
            font-weight: 500;
            font-size: 1.125rem;
            line-height: 1.75rem;
            margin: 0;
          }
        `}</style>
      </div>
    </>
  );
};

export default ErrorPage;
