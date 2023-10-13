import Image from "next/image";
import Footer from "../layouts/Footer";

export default function Home() {
  return (
    <>
      <div className="lg:ml-[160px] mt-[30px] lg:mt-[200px] ">
        <div className="flex flex-col space-y-4 mx-2 lg:mx-0 btn">
          <p className="text-4xl font-[800] lg:text-[82px] lg:w-[933px] leading-[120%] heading1">
            Programmatic Price Action
          </p>
          <p className="font-[400] lg:text-[22px] lg:max-w-[793px] opacity-[0.7] leading-[150%] bodytext">
            Tired of the wild price swings and rollercoaster rides in the
            cryptocurrency world? Look no further. Say hello to VegaFi, designed
            with groundbreaking technology and financial mechanisms, it&apos;s
            the only token that&apos;s guaranteed to not fall in price.
          </p>
          <button className="navbutton p-1 text-[#1E1E1E] font-[800] lg:w-[218px] py-4 text-[26px]">
            Buy Now
          </button>
        </div>
      </div>

      <div className="steps lg:h-[513px] pb-6 lg:pb-0">
        <div className="flex flex-col lg:flex-row lg:justify-around pt-[20px] lg:pt-[80px] mx-2 lg:mx-0">
          <div className="flex flex-col space-y-4">
            <Image src="/images/blur.png" alt="eth" width={100} height={100} />
            <div className="linegradient lg:w-[360px] h-[2px]"></div>
            <p className="lg:text-[32px] font-[700]">Buy Wall Technology</p>
            <p className="max-w-[360px] opacity-[0.89] bodytext">
              Say goodbuy to heart-stopping price drops. VegaFi&apos;s unique
              programming ensures that its value remains hedged. Token liquidity
              and taxes are directed to a UniswapV3 buy wall below the current
              price, giving you some peace of mind. The upside is infinite.{" "}
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <Image
              src="/images/moneycircle.png"
              alt="eth"
              width={100}
              height={100}
            />
            <div className="linegradient lg:w-[360px] h-[2px]"></div>
            <p className="lg:text-[32px] font-[700]">Public Good</p>
            <p className="max-w-[360px] opacity-[0.89] bodytext">
              VegaFi&apos;s programmatic price action technology is being
              adopted by projects who want hedged downside and infinite upside.
              In exchange for VegaFi&apos;s serivces, VGA holders will recieve
              fees - much like Uniswap.{" "}
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <Image src="/images/trade.png" alt="eth" width={100} height={100} />
            <div className="linegradient lg:w-[360px] h-[2px]"></div>
            <p className="lg:text-[32px] font-[700]">Transparency</p>
            <p className="max-w-[360px] opacity-[0.89] bodytext">
              We believe in transparency above all else. VegaFi&apos;s smart
              contracts are open-source, allowing you to verify its code and
              operations independently.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="technology lg:h-[800px] relative">
        <Image
          src="/images/bgcircle14.png"
          alt="eth"
          width={622}
          height={822}
          className="absolute -z-1 top-0"
        />
        <Image
          src="/images/bgcircle1.png"
          alt="eth"
          width={222}
          height={222}
          className="absolute -z-1"
        />
        <Image
          src="/images/bgcircle2.png"
          alt="eth"
          width={822}
          height={422}
          className="absolute right-0 -z-1"
        />
        <Image
          src="/images/bgcircle5.png"
          alt="eth"
          width={522}
          height={522}
          className="absolute -z-1"
        />
        <div className="lg:ml-[80px] pt-[80px] mx-2 lg:mx-0 relative z-10">
          <div className="flex justify-around items-center gap-2">
            <p className="text-4xl lg:text-[80px] font-[700]">Technology</p>
            <div className="linegradient w-full lg:w-[809px] h-[2px]"></div>
          </div>
          <div className="place-content-end flex lg:mr-[300px]">
            <Image
              src="/images/chevrontopgoingleft.svg"
              alt="eth"
              className="mt-[80px] hidden md:flex"
              width={500}
              height={55}
            />
          </div>
          <div className="mt-[20px] lg:mt-[0] flex flex-col lg:flex-row justify-center place-items-center space-x-2">
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="99"
                viewBox="0 0 90 99"
                fill="none"
              >
                <path
                  d="M52.7421 96.6698C48.1011 99.3493 42.3831 99.3493 37.7421 96.6698L8.36521 79.709C3.72418 77.0296 0.865206 72.0777 0.865207 66.7187L0.86521 32.7972C0.86521 27.4382 3.7242 22.4863 8.36521 19.8068L37.7421 2.84603C42.3831 0.166537 48.1011 0.166538 52.7421 2.84603L82.119 19.8068C86.76 22.4863 89.619 27.4382 89.619 32.7972L89.619 66.7187C89.619 72.0777 86.76 77.0296 82.119 79.7091L52.7421 96.6698Z"
                  fill="white"
                />
                <path
                  d="M52.7421 96.6698C48.1011 99.3493 42.3831 99.3493 37.7421 96.6698L8.36521 79.709C3.72418 77.0296 0.865206 72.0777 0.865207 66.7187L0.86521 32.7972C0.86521 27.4382 3.7242 22.4863 8.36521 19.8068L37.7421 2.84603C42.3831 0.166537 48.1011 0.166538 52.7421 2.84603L82.119 19.8068C86.76 22.4863 89.619 27.4382 89.619 32.7972L89.619 66.7187C89.619 72.0777 86.76 77.0296 82.119 79.7091L52.7421 96.6698Z"
                  fill="url(#paint0_linear_336_494)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_336_494"
                    x1="59.4299"
                    y1="-53.4798"
                    x2="-3.74268"
                    y2="-53.3832"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A38DF5" />
                    <stop offset="1" stop-color="#FFDCAF" />
                  </linearGradient>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  Start
                </text>
              </svg>
            </div>
            <Image
              src="/images/downchevron.svg"
              alt="eth"
              className="flex lg:hidden my-1"
              width={15}
              height={55}
            />
            <Image
              src="/images/fullarrow.svg"
              alt="eth"
              width={40}
              height={40}
              className="hidden lg:flex"
            />
            <div className="flex lg:flex-none">
              <p className="border-[#A38DF5] border-[2px] rounded-lg p-2 lg:text-[26px] heading1 items-center flex">
                Check Input
              </p>
              <Image
                src="/images/fullchevronright.svg"
                alt="eth"
                width={25}
                height={15}
                className="lg:hidden px-1"
              />
              <div className="flex justify-center items-center lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="99"
                  viewBox="0 0 90 99"
                  fill="none"
                >
                  <path
                    d="M52.7421 96.6698C48.1011 99.3493 42.3831 99.3493 37.7421 96.6698L8.36521 79.709C3.72418 77.0296 0.865206 72.0777 0.865207 66.7187L0.86521 32.7972C0.86521 27.4382 3.7242 22.4863 8.36521 19.8068L37.7421 2.84603C42.3831 0.166537 48.1011 0.166538 52.7421 2.84603L82.119 19.8068C86.76 22.4863 89.619 27.4382 89.619 32.7972L89.619 66.7187C89.619 72.0777 86.76 77.0296 82.119 79.7091L52.7421 96.6698Z"
                    fill="white"
                  />
                  <path
                    d="M52.7421 96.6698C48.1011 99.3493 42.3831 99.3493 37.7421 96.6698L8.36521 79.709C3.72418 77.0296 0.865206 72.0777 0.865207 66.7187L0.86521 32.7972C0.86521 27.4382 3.7242 22.4863 8.36521 19.8068L37.7421 2.84603C42.3831 0.166537 48.1011 0.166538 52.7421 2.84603L82.119 19.8068C86.76 22.4863 89.619 27.4382 89.619 32.7972L89.619 66.7187C89.619 72.0777 86.76 77.0296 82.119 79.7091L52.7421 96.6698Z"
                    fill="url(#paint0_linear_336_494)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_336_494"
                      x1="59.4299"
                      y1="-53.4798"
                      x2="-3.74268"
                      y2="-53.3832"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#A38DF5" />
                      <stop offset="1" stop-color="#FFDCAF" />
                    </linearGradient>
                  </defs>
                  <text
                    x="50%"
                    y="50%"
                    fill="black"
                    text-anchor="middle"
                    dominant-baseline="middle"
                  >
                    Stop
                  </text>
                </svg>
              </div>
              <Image
                src="/images/arrowwrapright.svg"
                alt="eth"
                width={65}
                height={15}
                className="flex lg:hidden absolute right-0 mt-[50px] mr-1"
              />
            </div>
            <Image
              src="/images/downchevron.svg"
              alt="eth"
              className="flex lg:hidden my-1"
              width={15}
              height={55}
            />
            <Image
              src="/images/chevronright.svg"
              alt="eth"
              width={15}
              height={15}
              className="hidden lg:flex"
            />
            <Image
              src="/images/arrowwrapleft.svg"
              alt="eth"
              width={40}
              height={15}
              className="flex lg:hidden absolute left-0 mt-[200px]"
            />
            <p className="border-[#A38DF5] border-[2px] rounded-lg p-2 lg:text-[26px] heading1">
              Swap within current interval
            </p>
            <Image
              src="/images/downchevron.svg"
              alt="eth"
              className="flex lg:hidden my-1"
              width={15}
              height={55}
            />
            <Image
              src="/images/chevronright.svg"
              alt="eth"
              width={15}
              height={15}
              className="hidden lg:flex"
            />
            <p className="border-[#A38DF5] border-[2px] rounded-lg p-2 lg:text-[26px] heading1">
              Is there remaining input or output
            </p>
            <div className="flex flex-col">
              <Image
                src="/images/downchevron.svg"
                alt="eth"
                className="flex lg:hidden my-1"
                width={15}
                height={55}
              />
              <Image
                src="/images/chevrontop.svg"
                alt="eth"
                width={55}
                height={55}
                className="hidden lg:flex"
              />
              <Image
                src="/images/chevronbottom.svg"
                alt="eth"
                width={55}
                height={55}
                className="hidden lg:flex"
              />
            </div>
            <div className="flex flex-row lg:flex-col relative">
              <p className="border-[#A38DF5] border-[2px] rounded-lg p-2 lg:text-[26px] heading1">
                Cross next tick
              </p>
              <Image
                src="/images/fullchevronright.svg"
                alt="eth"
                width={25}
                height={15}
                className="flex lg:hidden px-1"
              />
              <p className="border-[#A38DF5] border-[2px] rounded-lg p-2 lg:text-[26px] heading1">
                Execute Computed Swap
              </p>
            </div>
          </div>
          <div className="hidden lg:flex">
            <Image
              src="/images/chevronbottomgoingright.svg"
              alt="eth"
              className="lg:ml-[330px]"
              width={500}
              height={55}
            />
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="99"
                viewBox="0 0 90 99"
                fill="none"
              >
                <path
                  d="M52.7421 96.6698C48.1011 99.3493 42.3831 99.3493 37.7421 96.6698L8.36521 79.709C3.72418 77.0296 0.865206 72.0777 0.865207 66.7187L0.86521 32.7972C0.86521 27.4382 3.7242 22.4863 8.36521 19.8068L37.7421 2.84603C42.3831 0.166537 48.1011 0.166538 52.7421 2.84603L82.119 19.8068C86.76 22.4863 89.619 27.4382 89.619 32.7972L89.619 66.7187C89.619 72.0777 86.76 77.0296 82.119 79.7091L52.7421 96.6698Z"
                  fill="white"
                />
                <path
                  d="M52.7421 96.6698C48.1011 99.3493 42.3831 99.3493 37.7421 96.6698L8.36521 79.709C3.72418 77.0296 0.865206 72.0777 0.865207 66.7187L0.86521 32.7972C0.86521 27.4382 3.7242 22.4863 8.36521 19.8068L37.7421 2.84603C42.3831 0.166537 48.1011 0.166538 52.7421 2.84603L82.119 19.8068C86.76 22.4863 89.619 27.4382 89.619 32.7972L89.619 66.7187C89.619 72.0777 86.76 77.0296 82.119 79.7091L52.7421 96.6698Z"
                  fill="url(#paint0_linear_336_494)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_336_494"
                    x1="59.4299"
                    y1="-53.4798"
                    x2="-3.74268"
                    y2="-53.3832"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A38DF5" />
                    <stop offset="1" stop-color="#FFDCAF" />
                  </linearGradient>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  Stop
                </text>
              </svg>
            </div>
            <Image
              src="/images/chevronbottomrightgoingleft.svg"
              alt="eth"
              className=""
              width={500}
              height={55}
            />
          </div>
          <div className="flex justify-around mt-4">
            <div className="flex flex-col">
              <p className="lg:text-[60px] font-[600] leading-[120%] syne">
                Market Making
              </p>
              <p className="max-w-[710px]">
                Our technology leverages a nascent idea native to DeFi:
                decentralized market making. The power of auotmated liquidity
                management moves liquidity to the most profitable position while
                avoiding centralized counterparty risks. By leveraging tick math
                alegra, VegaFi formulates efficient strategies by referencing
                the sqrtPriceX96 method.{" "}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="lg:text-[60px] font-[600] leading-[120%] syne">
                Liquidity Taxes
              </p>
              <p className="max-w-[710px]">
                UniswapV3 is renowned for its efficiency and flexibility in
                decentralized exchanges, but it comes with the challenge of
                accruing liquidity. Our technology collects buy taxes,
                bolstering market making TVL and revenues. These revenues come
                full circle when they&apos;re distributed to VGA holders. The
                tax process is enabled by adding liquidity to strategic NFT
                positional representations.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="technology lg:h-[800px]">
        <Image
          src="/images/bgcircle7.png"
          alt="eth"
          width={250}
          height={250}
          className="absolute right-0 -z-1"
        />
        <Image
          src="/images/bgcircle9.png"
          alt="eth"
          width={560}
          height={250}
          className="absolute -z-1"
        />
        <Image
          src="/images/bgcircle10.png"
          alt="eth"
          width={450}
          height={250}
          className="absolute -z-1"
        />
        <div className="pt-[80px] mx-2 lg:mx-0 z-10 relative">
          <div className="flex justify-around items-center gap-2">
            <p className="text-4xl lg:text-[80px] font-[700] syne">
              Tokenomics
            </p>
            <div className="linegradient w-full lg:w-[809px] h-[2px]"></div>
          </div>
          <div className="flex justify-around mt-4">
            <Image
              src="/images/piechart.png"
              alt="eth"
              className=""
              width={800}
              height={250}
            />
          </div>
          <Image
            src="/images/bgcircle12.png"
            alt="eth"
            className="absolute -z-1"
            width={1800}
            height={250}
          />
          <div className="tokenomicstext flex justify-around mt-4 p-6 relative z-10">
            <div className="lg:text-[40px] gap-1 flex flex-col font-[800] leading-[130%] syneeb text-center">
              <p className="gradient-text">Anti-bot</p>
              <p>enabled</p>
            </div>
            <div className="lg:text-[40px] gap-1 flex flex-col font-[800] leading-[130%] syneeb text-center">
              LP <p className="gradient-text">locked</p>
            </div>
            <div className="lg:text-[40px] gap-1 flex flex-col font-[800] leading-[130%] syneeb text-center">
              <p className="gradient-text">6.5%</p> max wallet
            </div>
            <div className="lg:text-[40px] gap-1 flex flex-col font-[800] leading-[130%] syneeb text-center">
              <p className="gradient-text">Buy/sell</p> taxes: 10/0
            </div>
          </div>
        </div>
      </div>

      <div className="technology pb-8 relative">
        <Image
          src="/images/bgcircle5.png"
          alt="eth"
          width={522}
          height={522}
          className="absolute -z-1"
        />
        <Image
          src="/images/bgcircle13.png"
          alt="eth"
          width={592}
          height={522}
          className="absolute bottom-0 -z-1"
        />
        <div className="lg:ml-[80px] pt-[280px] mx-2 lg:mx-0 relative">
          <div className="flex justify-around items-center gap-2">
            <p className="text-4xl lg:text-[80px] font-[700] syne">Roadmap</p>
            <div className="linegradient w-full lg:w-[809px] h-[2px]"></div>
          </div>
          <div className="flex items-center justify-center space-x-8 p-8">
            <div className="flex flex-col space-y-[110px]">
              <p className="lg:text-[40px] font-[800] leading-[130%] syne">
                Exchange listing
              </p>
              <p className="lg:text-[40px] font-[800] leading-[130%] syne">
                VegaFi chain
              </p>
            </div>
            <Image src="/images/line.png" alt="eth" width={15} height={80} />
            <div className="flex flex-col space-y-[100px]">
              <p className="lg:text-[40px] font-[800] leading-[130%] syne">
                Dextools, CMC, and CG listing
              </p>
              <p className="lg:text-[40px] font-[800] leading-[130%] syne">
                VegaFi DAO
              </p>
              <p className="lg:text-[40px] font-[800] leading-[130%] syne">
                V2 algo
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/images/bgcircle11.png"
          alt="eth"
          width={652}
          height={522}
          className="absolute bottom-0 mt-[100px] -z-1 end-0 "
        />
      </div>
    </>
  );
}
