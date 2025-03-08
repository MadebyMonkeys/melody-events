import { Site, Page } from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import metas from "lume/plugins/metas.ts";
import sass from "lume/plugins/sass.ts";
import svgo from "lume/plugins/svgo.ts";
import inline from "lume/plugins/inline.ts";
import postcss from "lume/plugins/postcss.ts";
import transformImages from "lume/plugins/transform_images.ts";
import decapCMS from "lume/plugins/decap_cms.ts";

export default function () {
    return (site: Site) => {
        site
            .use(favicon())
            .use(metas())
            .use(sass())
            .use(svgo())
            .use(inline())
            .use(postcss())
            .use(transformImages())
            .use(decapCMS())
            
            .copy("js")
            .copy("static", ".");
    }
}
