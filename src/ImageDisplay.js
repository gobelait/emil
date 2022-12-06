import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function ImageDisplay() {
  return (
    <Box>
      <Typography variant="h3" color="white" mt={3}>
        La photothèque de 1000
      </Typography>
      <ImageList sx={{ width: '100', maxWidth: '500px'}}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div"></ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            onClick={() => console.log('popup image')}
          >
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
    </Box>
  );
}

const itemData = [
  {
    img: 'https://i.postimg.cc/kMhq9fC7/313588227-678385390555870-3571028585800334656-n.jpg',
    title: '1000 à l\'aventure  ',
    author: '@bkristastucchio',
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
  },
  {
    img: 'https://i.postimg.cc/bJm8ZR2H/317525299-805306197246195-9048685171317756368-n.jpg',
    title: '1000 qui bascule',
    author: '@nolanissac',
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
  },
  {
    img: 'https://i.postimg.cc/zfSqrNzQ/317630406-815973412798937-6685035469826571507-n.jpg',
    title: '1000 un peu coupé à droite',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/W3HCRYkK/317701711-548736440024002-1863124665154910536-n.jpg',
    title: '1000 bleu',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/RV690KCK/317565504-889585595536912-2951027606798155726-n.jpg',
    title: '1000 de devant',
    author: '@hjrc33',
  },
  {
    img: 'https://i.postimg.cc/nzSbFc63/317686576-1201731603755101-6788135354789853942-n.jpg',
    title: '1000 de derrière',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/yNn2j8Y7/317709145-545382094071849-5408224659959278983-n.jpg',
    title: '1000 en chemise de connard',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/2yLJCdd5/317711797-831526421454970-396599609769991101-n.jpg',
    title: '1000 bien habillé',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/vZnQ09pb/317767768-842660910284210-710914880040983279-n.jpg',
    title: '1000 très bleu',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/WzxBZYpr/317807970-444243347714033-4426198350938650788-n.jpg',
    title: '1000 trop bleu',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/dtLQTg67/317816818-663856475249499-600310742797655840-n.jpg',
    title: '1000 au cadran solaire',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/d3XYBt6h/317831131-5443927932371360-1064744979667552653-n.jpg',
    title: '1000 et les copains',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/X7RWBqXh/317863840-1095173764451639-4708763891556930733-n.jpg',
    title: '1000',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/Xv30xPfk/317895587-1188128602056703-2276654111374273494-n.jpg',
    title: '1000 rouge',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/63Wt6PTp/318027804-1120192758681349-1297500995872063747-n.jpg',
    title: '1000 bascule encore',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/BnTr8CrL/318098019-1343793446464421-942956527266292783-n.jpg',
    title: 'nice jacket 1000',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/0y1g24B1/318101020-659928885813355-7842927198121660596-n.jpg',
    title: '1000 découvre Snapchat',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/gr97jw4H/318118532-1194010928204784-1322461197662156472-n.jpg',
    title: 'pas 1000',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/VNz3XCw7/318159895-831949954724740-4230063314142637074-n.jpg',
    title: '1000 à la pétanque',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/WzDRhcVT/318198293-914221976617282-1059127942828655041-n.jpg',
    title: '1000 sentimental',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/brdPk2xX/318304988-1193471891566324-3144749353230591735-n.jpg',
    title: '1000 ou Brad Pitt ?',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/d0N99CFK/271011040-437048141296222-6754815420396485501-n.jpg',
    title: '1000 au ski',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/QMdb5bRb/274800789-674062540305365-2301084824865698277-n.jpg',
    title: '1000 fait une grimace',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/mZv8q7HL/274809789-1017220758870402-3880839752478154565-n.jpg',
    title: '1000 content',
    author: '',
  },  {
    img: 'https://i.postimg.cc/jCYWxg4h/317337986-3371572489755754-3440127852612615325-n.jpg',
    title: '1000 à Noël',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/6QMM1Sdg/317378426-891859242236444-3431785223556179160-n.jpg',
    title: '1000 le redneck',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/4xbcdgMH/317384897-1651810348567694-8717073198886466143-n.jpg',
    title: '1000 flou',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/zXT013Cn/317492539-421730640038853-6656510503485516373-n.jpg',
    title: '1000 admire une affiche',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/jjx7n10g/317561902-504621021732931-2856630512818180107-n.jpg',
    title: '1000 gonflé',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/Ssjg0rds/317596062-5795021407187731-9218077270206420612-n.jpg',
    title: 'Narines de 1000',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/J7G2S1Yq/317602621-540998687595355-1821696934269851920-n.jpg',
    title: '???',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/T3XmfwkX/317647371-822459512392245-6284178197939162169-n.jpg',
    title: '1000 aime les canettes',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/B6yMJK7C/317667637-547881196799759-1828742233834834737-n.jpg',
    title: '1000 bien habillé',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/1R2jQLLZ/317722714-510123541066310-1430023037364982111-n.jpg',
    title: '1000 moins habillé',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/jjx8cKJy/317749988-1347642599338881-6941950250221445345-n.jpg',
    title: '1000 supporter',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/jdfkdMbn/317958480-468150682139659-6663290921727309931-n.jpg',
    title: '1000 en pétasse',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/sgcmv80x/317967976-3390801114574647-8793760639090448155-n.jpg',
    title: '1000 tangue',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/x1yxLqq0/318025671-673139717814367-5405986406260336907-n.jpg',
    title: '1000 déguisé',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/zvgpvG9Y/318127405-1325017424991537-7345357601194689007-n.jpg',
    title: '1000 a la coupe du monde',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/LX7Y76qw/318195545-1352919665482838-512074300323794813-n.jpg',
    title: '1000 l\'américain',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/1t4VJNzD/318213993-700205018125755-8017317068090338199-n.jpg',
    title: '1000 sans permis et bourré v2',
    author: '',
  },  {
    img: 'https://i.postimg.cc/JzmK7mxS/318273962-802677680794244-7521477939875896087-n.jpg',
    title: '1000 lance une fléchette',
    author: '',
  },
  {
    img: 'https://i.postimg.cc/8zVXFLpK/318458844-1276108709979998-3190052119763429585-n.jpg',
    title: '1000 sucre son café',
    author: '',
  },  {
    img: 'https://i.postimg.cc/Gty81wG2/318628030-475175364756684-6543140360025818963-n.jpg',
    title: '1000 est copilote',
    author: '',
  },
];
