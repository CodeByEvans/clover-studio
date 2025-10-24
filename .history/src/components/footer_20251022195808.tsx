<div className="flex items-center justify-center mb-6 relative">
  {/* Glow únicamente detrás del logo */}
  <div className="relative w-16 h-16">
    <div className="absolute inset-0 bg-gradient-to-r from-[#F8C8DC]/40 to-[#D3B5E5]/40 rounded-full blur-xl -z-10"></div>
    <Image
      src="/logo.svg"
      alt="Clover Studio Logo"
      width={60}
      height={60}
      className="brightness-0 invert"
    />
  </div>

  {/* Texto del branding */}
  <div className="ml-4 text-left">
    <div className="font-bold text-2xl bg-gradient-to-r from-[#F8C8DC] to-[#D3B5E5] bg-clip-text text-transparent">
      CLOVER
    </div>
    <div className="text-sm text-[#F8C8DC] -mt-1 font-medium">STUDIO</div>
  </div>
</div>;
