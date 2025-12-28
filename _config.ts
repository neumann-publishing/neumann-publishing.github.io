import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
	location:
		Deno.env.get("DENO_ENV") == "production"
			? "https://magazine.neumann.tokyo"
			: "http://localhost:3000",
});

site.copy("upload-images");
site.copy("assets");
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
