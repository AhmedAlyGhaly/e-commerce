import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button } from "@mui/material";
import { supabase } from "../../providers";


export const UploadImages = () => {
  const [userId, setUserId] = useState('');
  const [media, setMedia] = useState([]);

  const getUser = async () => {

    const { data: { user } } = await supabase.auth.getUser()

    if (user !== null) {
      setUserId(user.id);
    } else {
      setUserId('');
    }
  }



  async function uploadImage(e) {
    const file = e.target.files[0];


    const { data, error } = await supabase
      .storage
      .from('imagesCard')
      .upload(userId + "/" + uuidv4(), file)

    if (data) {
      getMedia();

    } else {
      console.log(error);
    }
  }

  async function getMedia() {

    const { data, error } = await supabase.storage.from('imagesCard').list(userId + '/', {
      limit: 30,
      offset: 0,
      sortBy: {
        column: 'name', order:
          'asc'
      }
    });

    if (data) {
      setMedia(data);
    } else {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
    getMedia();
  }, [userId])

  return (
    <Button
      variant="contained"
      component="label"
    >
      Upload File
      <input
        type="file"
        onChange={uploadImage}
        hidden
      />
    </Button>
  )
}
