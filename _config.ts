import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import metas from "lume/plugins/metas.ts";

const site = lume();

site.copy("upload-images");
site.copy("assets");
site.copy("CNAME");
site.ignore("README.md", "caddy", "docker-compose.yml", "frpc.toml");

site.use(date());
site.use(metas());
site.use(
	lightningCss({
		minify: true,
		sourceMap: false,
	}),
);
site.add("styles.css");

export default site;
