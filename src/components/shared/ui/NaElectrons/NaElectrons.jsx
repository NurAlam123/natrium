const NaElectrons = () => {
  return (
    <div className="fixed opacity-5 -z-[998] translate-x-1/2 translate-y-1/2">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="fixed size-[80px] rounded-full bg-[rgba(255, 255, 255, 0.2)] flex justify-center items-center">
            <h1>Na</h1>
          </div>
          <div className="fixed flex justify-center items-center">
            <div className="fixed size-[150px] rounded-full border border-snow-white flex items-center justify-center">
              {/* 1st Shell - K Shell */}
              <div className="size-[140px] animate-spin">
                <div className="fixed size-[20px] rounded-full bg-snow-white left-[15px]"></div>
                <div className="fixed size-[20px] rounded-full bg-snow-white bottom-0 right-[15px]"></div>
              </div>
            </div>
            {/* 2nd Shell - L Shell */}
            <div className="fixed size-[250px] border rounded-full border-snow-white flex justify-center items-center">
              <div className="fixed size-[220px] animate-spin-3s">
                {/* 2s1 */}
                <div className="fixed size-[20px] rounded-full bg-snow-white top-[17px] left-[4px]"></div>
                {/* 2s2 */}
                <div className="fixed size-[20px] rounded-full bg-snow-white bottom-[4px] right-[20px]"></div>

                {/* 2p1 */}
                <div className="fixed size-[20px] rounded-full bg-snow-white top-[4px] left-[20px]"></div>
                {/* 2p2 */}
                <div className="fixed size-[20px] rounded-full bg-snow-white bottom-[18px] right-[5px]"></div>
                {/* 2p3 */}
                <div className="fixed size-[20px] rounded-full bg-snow-white top-[20px] right-[4px]"></div>
                {/* 2p4 */}
                <div className="fixed size-[20px] rounded-full bg-snow-white bottom-[20px] left-[4px]"></div>
                {/* 2p5 */}
                <div className="fixed size-[20px] rounded-full bg-snow-white top-[5px] right-[18px]"></div>
                {/* 2p6 */}
                <div className="fixed size-[20px] rounded-full bg-snow-white bottom-[5px] left-[18px]"></div>
              </div>
              {/* 3rd Shell - M Shell */}
            </div>
            <div className="fixed size-[350px] rounded-full border border-snow-white flex justify-center items-center">
              <div className="fixed size-[320px] animate-spin-4s">
                <div className="fixed size-[20px] rounded-full bg-snow-white top-[25px] left-[25px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaElectrons;
