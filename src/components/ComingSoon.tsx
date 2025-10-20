export const ComingSoon = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xl">
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
          Coming Soon...
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Estamos a preparar algo incrível para ti
        </p>
      </div>
    </div>
  );
};
