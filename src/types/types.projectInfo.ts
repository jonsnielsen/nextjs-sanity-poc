export type ProjectInfoDTO = {
  width: number;
  title: string;
  entry: {
    infoName: string;
    infoValue: {
      children: Array<{
        marks: any[];
        text: string;
        _type: string;
      }>;
    };
  };
};
export type ProjectInfo = {
  width: number;
  title: string;
};
