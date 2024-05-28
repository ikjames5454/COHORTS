import React, { useCallback} from 'react';
import { useDropzone } from 'react-dropzone';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';


interface ImageDropZoneProps {
    onSelect: (file: File) => void;
}


const ImageDropZone: React.FC<ImageDropZoneProps>  = ({ onSelect }) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
       

        if (acceptedFiles.length > 0) {
            onSelect(acceptedFiles[0]);
        }
        
        console.log(acceptedFiles);
    }, [onSelect]);

    

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { types: ['image/jpeg', 'image/*'] }, 
        multiple: false,
    });
  return (
    <div {...getRootProps()} className='dropzone h-[230px] w-[935px] m-1 p-1 border-[3px] border-dashed border-blue-300 flex justify-center font-bold cursor-pointer rounded-3xl align-middle items-center ' 
        
        >
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <div className='opt items-center flex flex-col '>
                     <FileUploadOutlinedIcon sx={{fontSize:"3.5rem",opacity:"0.6"}}/>
                     <p className='d text-2xl font-serif opacity-75'>Drop the files here ...</p>
                    </div>:
                    <div className='opt items-center flex flex-col ' >
                     <FileUploadOutlinedIcon sx={{fontSize:"3.5rem",opacity:"0.6"}}/>
                    <p className='d text-2xl font-serif opacity-75'>Drag and drop or <span className='sp text-blue-600'>Choose file</span></p>
                    <p className='size opacity-50 mt-4'>240 X 240 px Recommended, max size 1mb</p>
                    
                    </div>
                   
            }
        </div>
  )
}

export default ImageDropZone