import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';

export default function ImageDisplay() {
  return (
    <ImageList sx={{ width: '100', maxWidth: '500px'}}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          {item.title !== ''
          && (
            <ImageListItemBar
              title={item.title}
            />
          )}
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://i.postimg.cc/kMhq9fC7/313588227-678385390555870-3571028585800334656-n.jpg',
    title: '1000 à l\'aventure  ',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://i.postimg.cc/dQzQr4x4/317181787-850640422744110-9130504554312373103-n.jpg',
    title: '1000 sans permis et bourré',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://i.postimg.cc/Dzg3Nc5k/317463171-625087086080740-8293034027317652265-n.jpg',
    title: '1000 au bar',
    author: '@helloimnik',
  },
  {
    img: 'https://i.postimg.cc/tCxQbbDz/317670410-866487417883509-9058201009448600646-n.jpg',
    title: '1000 au bar',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/bJm8ZR2H/317525299-805306197246195-9048685171317756368-n.jpg',
    title: '1000 qui bascule',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/wvjYYsbt/317570619-925614305534506-6495640322065117282-n.jpg',
    title: '1000 le rider xtrem',
    author: '',

  },
  {
    img: 'https://i.postimg.cc/T2yYKZCK/317571897-512609414228372-4389916767758803605-n.jpg',
    title: '1000 souris beaucoup',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/xCCh4VcM/317596430-860327915152127-2900242802321743549-n.jpg',
    title: '1000 lave des patates',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/zfSqrNzQ/317630406-815973412798937-6685035469826571507-n.jpg',
    title: '1000 un peu coupé à droite',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/W3HCRYkK/317701711-548736440024002-1863124665154910536-n.jpg',
    title: '1000 bleu',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/RV690KCK/317565504-889585595536912-2951027606798155726-n.jpg',
    title: '1000 de devant',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/nzSbFc63/317686576-1201731603755101-6788135354789853942-n.jpg',
    title: '1000 de derrière',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/yNn2j8Y7/317709145-545382094071849-5408224659959278983-n.jpg',
    title: '1000 en chemise de connard',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/2yLJCdd5/317711797-831526421454970-396599609769991101-n.jpg',
    title: '1000 bien habillé',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/vZnQ09pb/317767768-842660910284210-710914880040983279-n.jpg',
    title: '1000 très bleu',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/WzxBZYpr/317807970-444243347714033-4426198350938650788-n.jpg',
    title: '1000 trop bleu',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/dtLQTg67/317816818-663856475249499-600310742797655840-n.jpg',
    title: '1000 au cadran solaire',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/d3XYBt6h/317831131-5443927932371360-1064744979667552653-n.jpg',
    title: '1000 et les copains',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/X7RWBqXh/317863840-1095173764451639-4708763891556930733-n.jpg',
    title: '1000',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/Xv30xPfk/317895587-1188128602056703-2276654111374273494-n.jpg',
    title: '1000 rouge',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/63Wt6PTp/318027804-1120192758681349-1297500995872063747-n.jpg',
    title: '1000 bascule encore',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/BnTr8CrL/318098019-1343793446464421-942956527266292783-n.jpg',
    title: 'nice jacket 1000',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/0y1g24B1/318101020-659928885813355-7842927198121660596-n.jpg',
    title: '1000 découvre Snapchat',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/gr97jw4H/318118532-1194010928204784-1322461197662156472-n.jpg',
    title: 'pas 1000',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/VNz3XCw7/318159895-831949954724740-4230063314142637074-n.jpg',
    title: '1000 à la pétanque',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/WzDRhcVT/318198293-914221976617282-1059127942828655041-n.jpg',
    title: '1000 sentimental',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/brdPk2xX/318304988-1193471891566324-3144749353230591735-n.jpg',
    title: '1000 ou Brad Pitt ?',
    author: '',
    rows: 2,
    cols: 2,
  },
  // {
  //   img: '',
  //   title: '',
  //   author: '',
  //   rows: 2,
  //   cols: 2,
  // },
];
