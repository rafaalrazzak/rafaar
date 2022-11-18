import { useMediaQuery, useWindowScrollY } from "@/hooks"
import clsx from "clsx"

export default function Hello() {
  const scrollPos = useWindowScrollY()
  const mdscreen = useMediaQuery("(min-width: 768px)")

  return (
    <>
      <nav
        className={clsx(
          "w-full bg-red-500 text-sky-500",
          // scrollPos > 0 ? "-top-16" : " top-0",
        )}
      >
        <h1 className="font-bold text-red-700">HELLO WORLD</h1>
      </nav>
      <div className="h-screen py-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
        elementum justo. In hac habitasse platea dictumst. Sed in pulvinar orci.
        Proin feugiat libero quis augue maximus, sit amet convallis augue
        efficitur. Vestibulum vestibulum eros mauris, eu mollis turpis imperdiet
        a. Donec mollis mollis justo, et hendrerit mauris pellentesque et. Cras
        sapien leo, gravida vel dui imperdiet, suscipit tempus elit. Suspendisse
        at eleifend magna. Phasellus et nibh vel diam tristique sodales. Nullam
        ex libero, scelerisque id porttitor a, lobortis sit amet purus.
        Vestibulum diam est, malesuada ac arcu ut, sollicitudin pulvinar magna.
        Curabitur enim sem, rutrum id magna eget, tempus varius magna. Nam
        vulputate tellus vel rutrum convallis. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Vivamus
        scelerisque porta sapien, a suscipit lacus laoreet non. Donec facilisis
        purus quis risus tincidunt gravida. Phasellus sit amet rutrum metus.
        Aliquam at lacinia ante. Aenean pellentesque ligula eget quam interdum
        varius. In ullamcorper mi in augue cursus efficitur. Morbi euismod justo
        vitae iaculis posuere. Pellentesque scelerisque iaculis neque a varius.
        Nunc vel magna consectetur, cursus justo ut, imperdiet enim. Fusce
        mattis libero in sem fermentum suscipit. Aenean sed elit eget lorem
        eleifend vulputate eu quis lorem. Suspendisse blandit eros quis sem
        dictum dapibus. Nam ex odio, cursus non sodales a, cursus non quam.
        Nulla eu elit sollicitudin tellus pharetra bibendum ut ut dui. Nullam
        semper ipsum vitae leo ultricies, vitae pharetra felis fringilla. Nullam
        fringilla urna a libero accumsan, sit amet vehicula velit sodales. Ut
        sit amet ante mauris. Maecenas sed libero lectus. Curabitur sodales,
        metus vel porta fermentum, lorem turpis malesuada justo, id condimentum
        metus ante eget eros. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Integer mollis imperdiet pellentesque. Pellentesque
        interdum purus quis sapien pulvinar pulvinar. Aenean pretium sem sit
        amet cursus mollis. Quisque porta iaculis diam, at malesuada orci
        vehicula et. Curabitur finibus libero a accumsan mollis. Nullam a
        tincidunt justo, et consequat dolor. Nam semper, nunc in finibus
        bibendum, ex neque rutrum enim, ac tempor nisi sapien ut ipsum. Morbi
        vehicula, velit nec cursus hendrerit, eros nulla euismod nisi, quis
        venenatis neque purus sed neque. Morbi fermentum auctor gravida. Cras
        nisl libero, dictum id felis at, tristique tincidunt lorem. Nam ut felis
        sagittis, convallis neque in, accumsan libero. Nunc at consectetur sem.
        Nulla nibh massa, semper sit amet ullamcorper at, ultricies vel mauris.
        Integer placerat mauris at magna porta porta. Ut quis tortor laoreet,
        cursus eros vel, mollis augue. Sed hendrerit, purus et pretium porta,
        ante quam sagittis sapien, luctus dapibus nisi tellus eu eros. Maecenas
        tortor libero, pretium et egestas et, finibus eget leo. Donec mattis est
        sit amet ipsum sodales feugiat. In porttitor lobortis ullamcorper.
        Mauris commodo commodo quam, sit amet porttitor elit luctus nec.
        Pellentesque finibus quam sed sollicitudin efficitur. Cras scelerisque
        massa vel tempus aliquet. Pellentesque vitae accumsan ante. Sed ac
        maximus nunc. Nulla sit amet sem porta, sagittis augue vitae, ultricies
        nunc. Aliquam arcu nulla, pretium ac leo vel, maximus venenatis ligula.
        Quisque commodo, tortor mollis placerat luctus, tortor massa sodales
        leo, eu lacinia sem elit quis elit. Aenean at lobortis purus. Morbi
        sollicitudin nisi nunc, a luctus metus mattis ac. In neque nisi, rhoncus
        in vehicula malesuada, congue eget neque. Phasellus erat nisl, faucibus
        eget leo non, egestas ornare erat. In libero arcu, molestie quis
        pellentesque non, tincidunt in urna. Mauris semper mauris purus, sit
        amet maximus augue dignissim sed. Proin porttitor porta faucibus. Nam at
        accumsan nibh. Fusce sed sapien ac turpis tempor eleifend commodo at ex.
        Quisque ultricies nulla purus, nec molestie libero vestibulum ut. Morbi
        posuere enim nec justo vestibulum pulvinar. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Sed eu dui
        euismod, hendrerit quam ut, accumsan nulla. Sed venenatis porta felis,
        eu pulvinar leo venenatis mollis. Vestibulum lacinia dignissim eros id
        finibus. Nam leo urna, faucibus eu congue non, molestie et arcu. Sed
        tincidunt sollicitudin imperdiet. Ut fringilla gravida magna ut
        imperdiet. Nunc a mattis libero, quis vulputate arcu. Fusce sed
        facilisis dui. Donec vel nulla mauris. Curabitur auctor, est non
        volutpat volutpat, quam neque efficitur dui, at ornare orci felis vel
        metus. Duis pharetra tincidunt eleifend. Maecenas lectus ante, fermentum
        non scelerisque nec, convallis eget massa. Fusce mauris libero, aliquam
        at pharetra sed, faucibus at purus. Donec accumsan nisi in mauris
        sollicitudin suscipit. Nulla facilisi. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. In ultrices turpis et nunc
        blandit, dapibus vehicula orci faucibus. Aliquam et elit egestas,
        efficitur turpis id, ullamcorper purus. Donec commodo justo dui, non
        tincidunt velit placerat sed. Nam odio augue, pellentesque a risus non,
        euismod eleifend nunc. Aliquam ut lobortis enim. Etiam congue tincidunt
        elit, sed vulputate sem iaculis quis. Vivamus sodales nisl faucibus,
        molestie nisl non, iaculis neque. Proin iaculis auctor posuere. Nulla
        scelerisque erat non accumsan pellentesque. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam faucibus tincidunt felis a euismod.
        Sed vel facilisis lacus, quis faucibus ante. In at metus et lectus
        rhoncus ultricies sit amet at risus. Phasellus et lorem placerat,
        efficitur nulla vel, suscipit nulla. Nam pharetra tincidunt tellus a
        malesuada. Suspendisse massa arcu, mattis id malesuada a, faucibus eu
        tellus. Donec tristique blandit ante ut elementum. In hac habitasse
        platea dictumst. Donec lobortis erat elementum efficitur commodo. Ut sit
        amet quam eget mi imperdiet ultricies ut iaculis diam. Donec vestibulum
        tincidunt ligula vel ullamcorper. Praesent a tortor vehicula lorem
        euismod pulvinar sit amet quis orci. Aliquam pretium quis justo nec
        viverra. In ullamcorper purus in pretium bibendum. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Aenean erat mi, imperdiet non finibus at, aliquet non tellus. Ut lacinia
        placerat metus at euismod. Vestibulum pretium quis elit eu cursus.
        Phasellus vel tortor sed mauris semper scelerisque. Nulla commodo risus
        tristique accumsan bibendum. In turpis ante, ultrices ut congue non,
        faucibus ac quam. Nunc luctus sagittis aliquet. Ut porta libero a
        faucibus euismod. Fusce eget egestas tellus. In eleifend rutrum purus,
        quis dignissim velit congue quis. Mauris diam dui, posuere quis erat
        vel, posuere accumsan lorem. Ut at nisi quis lacus feugiat semper.
        Pellentesque sed dui sit amet mauris consequat feugiat non vel augue.
        Sed accumsan sapien elit, in dictum leo luctus et. Donec porttitor,
        risus eget cursus pulvinar, urna purus molestie dolor, id tempor nulla
        dui eu orci. Donec egestas dignissim velit, vitae lacinia mauris porta
        et. Mauris elementum mi nec dignissim interdum. Aenean a urna elementum
        justo cursus rhoncus ac eget mi.
      </div>
    </>
  )
}
