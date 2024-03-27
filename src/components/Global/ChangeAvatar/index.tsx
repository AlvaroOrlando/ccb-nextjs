/* eslint-disable @next/next/no-img-element */
import Button from "../Button";
// import blankProfile from "@/assets/images/blank-profile.png"

interface ChangeAvatarProps {
    avatarSrc: string | undefined
}

export default function ChangeAvatar({ avatarSrc }: ChangeAvatarProps){

const blankProfile = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

function handleChangeAvatar(){
    console.log("Avatar Changed");
}

    return (
        <div style={{display:'flex', gap:'2rem', width:'100%'}}>
            {/* Image Container */}
            <div
              style={{
                width:'96px',
                height:'96px',
                border:'none',
                backgroundColor:'transparent;',
            }}
            >
            <img style={{ width:'100%', objectFit:'cover', borderRadius:'8px',}} src={avatarSrc ? avatarSrc : blankProfile} alt="" />
            {/* Avatar */}
            </div>

            {/* Change Avatar */}
            <div>
                <Button
                  value={avatarSrc ? `Mudar foto` : `Adicionar foto`}
                  type="button"
                  onClick={handleChangeAvatar}
                />
                <p style={{
                    marginTop:'.5rem',
                    fontSize:'.8rem'
                }}>JPG, GIF or PNG. 1MB max.</p>
            </div>
        </div>
    )
}
