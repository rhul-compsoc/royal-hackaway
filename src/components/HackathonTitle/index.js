import React, { Component } from "react"
import styles from "./index.module.scss"
import { CombineStyles } from "../../helpers/CombineStyles"
import image from "./image.svg"

class HackathonTitle extends Component {
  render() {
    return (
      <section className={CombineStyles(styles.hackathonTitle)}>
        <div className="row justify-content-center py-5">
          <div className="col-3 text-left py-5">
            <div>
              <h1 className="py-2">Create something awesome</h1>
              <p className="py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse et auctor neque, id ornare nibh. Aliquam id velit
                aliquet, tristique ligula sit amet, dictum mauris.{" "}
              </p>
              <p>
                Puis condimentum tristique libero, ac imperdiet mauris vulputate
                ut. Pellentesque tellus sem, hendrerit vel orci vitae, euismod
                lobortis lectus. Quisque odio mi, faucibus at neque blandit,
                aliquam tincidunt sapien.
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="mx-auto">
              <img src={image} alt="coder" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export { HackathonTitle }
