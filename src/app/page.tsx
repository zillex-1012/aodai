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
  "https://images.unsplash.com/photo-1681566803970-ca4988973abe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVDMyVBMW8lMjBkJUMzJUEwaSUyMGMlQzMlQTFjaCUyMHQlQzMlQTJufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1772443325335-fa757433a1ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fCVDMyVBMW8lMjBkJUMzJUEwaSUyMGMlQzMlQTFjaCUyMHQlQzMlQTJufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1772698262913-be650605e900?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fCVDMyVBMW8lMjBkJUMzJUEwaSUyMGMlQzMlQTFjaCUyMHQlQzMlQTJufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1772698263798-d47046847f15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHwlQzMlQTFvJTIwZCVDMyVBMGklMjBjJUMzJUExY2glMjB0JUMzJUEybnxlbnwwfHwwfHx8MA%3D%3D",
]

const IMAGES_2 = [
  "https://images.unsplash.com/photo-1775794180126-bcd267f6badb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVDMyVBMW8lMjBkJUMzJUEwaSUyMGxlbXVyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1761635491372-271565760322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fCVDMyVBMW8lMjBkJUMzJUEwaSUyMGxlbXVyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1710828730314-82cb9e0943bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fCVDMyVBMW8lMjBkJUMzJUEwaSUyMGxlbXVyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1768452570697-62c8b864dd3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fCVDMyVBMW8lMjBkJUMzJUEwaSUyMGxlbXVyfGVufDB8fDB8fHww",
]

const IMAGES_3 = [
  "https://images.unsplash.com/photo-1767603753231-0a93a5608e31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fCVDMyVBMW8lMjBkJUMzJUEwaSUyMHRydXklRTElQkIlODFuJTIwdGglRTElQkIlOTFuZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1705049316557-60cf23c139ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fCVDMyVBMW8lMjBkJUMzJUEwaSUyMHRydXklRTElQkIlODFuJTIwdGglRTElQkIlOTFuZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1767603752934-6ba5227e3b2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fCVDMyVBMW8lMjBkJUMzJUEwaSUyMHRydXklRTElQkIlODFuJTIwdGglRTElQkIlOTFuZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1706447734482-8aceec3b620a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHwlQzMlQTFvJTIwZCVDMyVBMGklMjB0cnV5JUUxJUJCJTgxbiUyMHRoJUUxJUJCJTkxbmd8ZW58MHx8MHx8fDA%3D",
]

export default function Home() {
  return (
    <div className="relative bg-transparent">
      <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-6 pt-12 text-center">
        <ContainerAnimated>
          <h1 className="font-serif text-5xl font-medium md:text-7xl tracking-wide">
            Sắc Việt{" "}
            <span className="font-serif font-semibold text-primary">
              Áo Dài
            </span>
          </h1>
        </ContainerAnimated>
        <ContainerAnimated>
          <h1 className="font-serif text-3xl font-medium md:text-4xl mt-4 text-secondary">
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

      <div className="pointer-events-none absolute z-10 h-[80vh] w-full "
        style={{
          background: "linear-gradient(to right, #991b1b, #f59e0b, #991b1b)",
          filter: "blur(100px)",
          mixBlendMode: "screen",
          opacity: 0.4
        }}
      />

      <ContainerScroll className="relative h-[800vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer className="">
            <GalleryCol yRange={["0%", "-75%"]} className="-mt-2">
              {IMAGES_1.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-[2/3] block h-auto max-h-full w-full rounded-md object-cover shadow-xl"
                  src={imageUrl}
                  alt="gallery item"
                />
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-50%]" yRange={["0%", "-65%"]}>
              {IMAGES_2.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-[2/3] block h-auto max-h-full w-full rounded-md object-cover shadow-xl"
                  src={imageUrl}
                  alt="gallery item"
                />
              ))}
            </GalleryCol>
            <GalleryCol yRange={["0%", "-75%"]} className="-mt-2">
              {IMAGES_3.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-[2/3] block h-auto max-h-full w-full rounded-md object-cover shadow-xl"
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
