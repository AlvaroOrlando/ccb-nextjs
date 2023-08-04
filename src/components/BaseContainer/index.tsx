import styles from "./baseContainer.module.scss"
import { PropsWithChildren } from "react";

export default function BaseContainer({children}:PropsWithChildren){
    return (
        <div className={styles.formContainer}>
            {children}
        </div>
    )
}