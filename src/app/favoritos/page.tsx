import FavoritesContent from "@/components/favorites/favorites-content";

export const metadata = {
  title: "Mis Favoritos - Clover Studio",
  description: "Gestiona tus productos favoritos de Clover Resin Studio",
};

export default function FavoritosPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F3]">
      <FavoritesContent />
    </main>
  );
}
