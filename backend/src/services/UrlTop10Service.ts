import { UrlDTO } from "../dtos/UrlDTO";
import { UrlRepository } from "../repositories/UrlRepository";

export class UrlTop10Service {
  async execute() {
    const repository = UrlRepository();

    const search = await repository.find({
      order: { total_visits: "DESC", title: "ASC" },
      skip: 0,
      take: 10,
    });

    let promises: any[] = [];

    search.forEach(async (data) => {
      let dto: UrlDTO = {
        title: data.title,
        encurt_url: data.encurt_url,
        total_visits: data.total_visits,
      };

      promises.push(dto);
    });

    await Promise.all(promises)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.error(
          "Ops! Erro durante o processamento de dados do Top10 URLs:",
          err
        );
      });

    return promises;
  }
}
