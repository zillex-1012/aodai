import { 
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer 
} from "@/components/blocks/animated-gallery"
import { Button } from "@/components/ui/button"
import { VideoIcon } from "lucide-react"

const IMAGES_1 = [
  "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=1000",
]

const IMAGES_2 = [
  "https://images.unsplash.com/photo-1508213780696-cf411aa63b51?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1616091093714-c64882e9ab55?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1599839619722-39751411883c?auto=format&fit=crop&q=80&w=1000",
]

const IMAGES_3 = [
  "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1611039800531-df13eb80c880?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1612255330052-117562479e9a?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1590212151175-e58edd9bb56f?auto=format&fit=crop&q=80&w=1000",
]

export default function Home() {
  return (
    <div className="relative bg-white ">
      <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-6 pt-12 text-center">
        <ContainerAnimated>
          <h1 className="font-serif text-4xl font-extralight  md:text-5xl">
            Sắc Việt{" "}
            <span className=" font-serif font-extralight text-primary">
              Áo Dài
            </span>
          </h1>
        </ContainerAnimated>
        <ContainerAnimated>
          <h1 className="font-serif text-4xl font-extralight md:text-5xl">
            Di sản văn hóa nghìn năm
          </h1>
        </ContainerAnimated>

        <ContainerAnimated className="my-4">
          <p className="leading-normal tracking-tight text-muted-foreground max-w-xl mx-auto">
            Gìn giữ nét đẹp truyền thống của người phụ nữ Việt Nam qua tà áo dài.
            <br /> Bộ sưu tập tinh tế dành cho tâm hồn yêu văn hóa Việt.
          </p>
        </ContainerAnimated>

        <ContainerAnimated>
          <Button
            className="gap-1 bg-primary text-white rounded-full px-6"
          >
            Khám phá ngay <VideoIcon className="size-4" />
          </Button>
          <Button variant={"link"} className="text-secondary">
            Về chúng tôi
          </Button>
        </ContainerAnimated>
      </ContainerStagger>

      <div className="pointer-events-none absolute z-10 h-[70vh] w-full "
      style={{
            background: "linear-gradient(to right, #7c2d12, #ea580c, #7c2d12)",
            filter: "blur(84px)",
            mixBlendMode: "screen",
          }}
      />

      <ContainerScroll className="relative h-[450vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer className="">
            <GalleryCol yRange={["0%", "-35%"]} className="-mt-2">
              {IMAGES_1.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageUrl}
                  alt="gallery item"
                />
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-50%]" yRange={["10%", "-25%"]}>
              {IMAGES_2.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageUrl}
                  alt="gallery item"
                />
              ))}
            </GalleryCol>
            <GalleryCol yRange={["0%", "-35%"]} className="-mt-2">
              {IMAGES_3.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageUrl}
                  alt="gallery item"
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  )
}
