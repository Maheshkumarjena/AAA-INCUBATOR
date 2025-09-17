// Full-Width Grid Pattern Background
const FullWidthGridPattern = () => {
  return (
    <div className="absolute inset-0 z-0 w-screen h-full overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw'
        }}
      />
    </div>
  );
};