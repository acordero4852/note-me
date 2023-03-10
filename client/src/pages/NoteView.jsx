import { Box, Heading, Stack, Tag, HStack, IconButton, Flex, Text } from '@chakra-ui/react'
import { BsSave, BsPencil, BsFileEarmarkPdf } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import parse from 'html-react-parser'
import html2pdf from 'html2pdf.js'
import React, { useState } from 'react'

const NoteView = () => {

  const [title, setTitle] = useState('Note Title')
  const [tags, setTags] = useState(['Tags', 'Writing', 'Math', 'Science'])
  const [textContent, setTextContent] = useState('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Amet risus nullam eget felis eget nunc. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Etiam sit amet nisl purus in mollis nunc sed id. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Nec nam aliquam sem et tortor consequat id porta nibh. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Scelerisque eleifend donec pretium vulputate. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Ut consequat semper viverra nam. Dolor sit amet consectetur adipiscing. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Purus in massa tempor nec feugiat nisl pretium. Quis auctor elit sed vulputate mi sit amet. Tellus orci ac auctor augue mauris. Tortor condimentum lacinia quis vel eros donec ac.</p><p>Aliquam faucibus purus in massa tempor nec feugiat nisl. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Cursus risus at ultrices mi. Quam pellentesque nec nam aliquam sem et tortor consequat. Nullam non nisi est sit amet facilisis magna. Tortor at risus viverra adipiscing at in tellus integer feugiat. Aliquam sem fringilla ut morbi tincidunt augue. Fames ac turpis egestas integer. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Massa tempor nec feugiat nisl pretium fusce id velit. Proin fermentum leo vel orci. Eu tincidunt tortor aliquam nulla. Metus aliquam eleifend mi in nulla posuere. Sagittis vitae et leo duis ut diam quam nulla. Potenti nullam ac tortor vitae purus faucibus.</p><p>Non quam lacus suspendisse faucibus interdum. Turpis massa sed elementum tempus egestas sed sed risus. Gravida in fermentum et sollicitudin ac orci phasellus. Mi proin sed libero enim sed faucibus turpis. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Suspendisse in est ante in nibh mauris cursus mattis molestie. Risus sed vulputate odio ut enim. Tempor nec feugiat nisl pretium fusce id velit. Nibh mauris cursus mattis molestie a iaculis at erat. Auctor neque vitae tempus quam pellentesque nec nam. Cum sociis natoque penatibus et magnis dis parturient.</p><p>Mauris vitae ultricies leo integer malesuada. Condimentum vitae sapien pellentesque habitant morbi tristique. Varius duis at consectetur lorem donec massa. Enim praesent elementum facilisis leo vel fringilla. Tincidunt vitae semper quis lectus. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Tempor id eu nisl nunc mi ipsum faucibus vitae. Feugiat nibh sed pulvinar proin gravida. Suscipit tellus mauris a diam maecenas sed enim. Massa enim nec dui nunc. Lectus sit amet est placerat in egestas. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Suscipit tellus mauris a diam maecenas sed enim. Neque egestas congue quisque egestas. Et netus et malesuada fames ac turpis egestas maecenas. Diam vel quam elementum pulvinar etiam non quam lacus. Orci sagittis eu volutpat odio facilisis mauris. Senectus et netus et malesuada fames ac. Enim facilisis gravida neque convallis a cras.</p><p>Massa eget egestas purus viverra accumsan in. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sed vulputate odio ut enim. Id ornare arcu odio ut. Interdum posuere lorem ipsum dolor sit amet. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Sem integer vitae justo eget magna fermentum iaculis eu non. Non odio euismod lacinia at. Cras sed felis eget velit aliquet sagittis id consectetur purus. Pharetra vel turpis nunc eget lorem dolor sed. Consequat id porta nibh venenatis. Justo nec ultrices dui sapien eget mi proin sed libero. Enim lobortis scelerisque fermentum dui. Aenean et tortor at risus viverra. Odio eu feugiat pretium nibh ipsum consequat.</p><p>Aliquam sem fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin aliquam ultrices sagittis. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Tellus elementum sagittis vitae et leo duis ut. Mattis vulputate enim nulla aliquet porttitor lacus luctus. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Dignissim convallis aenean et tortor at risus. Vel orci porta non pulvinar neque laoreet suspendisse. Purus sit amet luctus venenatis. Urna molestie at elementum eu facilisis sed odio morbi quis. Volutpat consequat mauris nunc congue. Est velit egestas dui id ornare arcu odio ut sem.</p><p>Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Fames ac turpis egestas maecenas pharetra convallis. Dignissim sodales ut eu sem integer vitae justo. Nunc sed velit dignissim sodales ut eu sem. Massa tincidunt dui ut ornare lectus sit amet est placerat. Faucibus a pellentesque sit amet. Ultrices sagittis orci a scelerisque purus semper eget duis at. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Nulla malesuada pellentesque elit eget. Risus nec feugiat in fermentum posuere. Commodo sed egestas egestas fringilla phasellus.</p><p>Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Sit amet volutpat consequat mauris nunc congue nisi vitae. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Vestibulum morbi blandit cursus risus at ultrices. Mauris cursus mattis molestie a iaculis. In pellentesque massa placerat duis ultricies lacus sed turpis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Et netus et malesuada fames. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Imperdiet dui accum<strong>san sit amet nulla facilisi morbi tempus. Aliquet enim tortor at auctor urna nunc id cursus metus. Sed turpis tincidunt id aliquet risus feugiat in. Tristique senectus et netus et malesuada fames ac turpis egestas. At volutpat diam ut venenatis tellus in metus vulputate. Sit amet cursus sit amet dictum sit amet. Enim neque volutpat ac tincidunt. Interdum varius sit amet mattis vulputate enim nulla aliquet. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Ac placerat vestibulum lectus mauris ultrices eros in cursus.</strong></p><p><strong>Lobortis feugiat vivamus at augue eget. Scelerisque varius morbi enim nunc. Pretium quam vulputate dignissim suspendisse. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sagittis orci a scelerisque purus semper eget duis at tellus. Tincidunt eget nullam non nisi est sit. Orci sagittis eu volutpat odio facilisis mauris. Enim diam vulputate ut pharetra sit. Nulla at volutpat diam ut venenatis tellus in metus. Vitae congue eu consequat ac felis donec et odio. Pellentesque dignissim enim sit amet. In aliquam sem fringilla ut morbi tincidunt a</strong>ugue. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Dapibus ultrices in iaculis nunc sed augue. In est ante in nibh mauris cursus. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Elementum eu facilisis sed odio morbi quis commodo.</p><p>A condimentum vitae sapien pellentesque habitant. Eros donec ac odio tempor. Quam elementum pulvinar etiam non quam lacus. Vel pharetra vel turpis nunc eget. Suspendisse ultrices gravida di<strong>ctum fusce. Sed faucibus turpis in eu. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Aliquet bibendum enim facilisis gravida neque. Morbi tempus iaculis urna id. Hendrerit gravida rutrum quisque non tellus orci ac. Semper quis lectus nulla at volutpat diam. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. A cras semper auctor neque vitae tempus. Tellus cras adipiscing </strong>enim eu turpis egestas pretium aenean. Blandit cursus risus at ultrices. Convallis convallis tellus id interdum. Convallis posuere morbi leo urna molestie at elementum eu. Quam lacus suspendisse faucibus interdum.</p>');

  const navigate = useNavigate();

  const handleDownloadPdf = () => {
    const options = {
      margin: 1,
      filename: `${title}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      pdfHighlight: true,
    };
    html2pdf().from(textContent).set(options).save();
  };

  return (
    <Box>
      <Sidebar />
      <Box p={16} ml={300}>
        <Flex justify="space-between" align="center">  
          <Heading as="h1" fontSize={32}>Preview</Heading>
          <HStack spacing={2}>
            <IconButton icon={<BsSave />} aria-label='Save note' colorScheme='teal' onClick={() => navigate('/dashboard')}/>
            <IconButton icon={<BsFileEarmarkPdf />} aria-label='Download as PDF' colorScheme='yellow' onClick={handleDownloadPdf}/>
            <IconButton icon={<BsPencil />} aria-label="Edit note" colorScheme='linkedin' onClick={() => navigate('/edit')}/>
          </HStack>
        </Flex>
        <Stack spacing={4} mt={8}>
          <Heading fontSize={48}>{title}</Heading>
          <HStack spacing={2} noOfLines={1}>
            {tags.map((tag, index) => (
              <Tag key={index} colorScheme='cyan' variant='subtle' borderRadius="full">{tag}</Tag>
            ))}
          </HStack>
          <Text>{parse(textContent)}</Text>
        </Stack>
      </Box>
    </Box>
  )
}

export default NoteView