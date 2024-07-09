import { FC } from 'react';
import clsx from 'clsx';

import { CubeStatus } from './type';
import style from './GameCube.module.scss';

type GameCubeProps = {
  status: CubeStatus;
};

const GameCube: FC<GameCubeProps> = ({ status }) => {
  return (
    <div className={clsx(style.cube, style[status])}>
      <div className={clsx(style.face, style.front)}>
        <div className={style.point_wrapper}>
          <div className={clsx(style.point, style.point_center_center)} />
        </div>
      </div>
      <div className={clsx(style.face, style.back)}>
        <div className={style.point_wrapper}>
          <div
            className={clsx(style.point, style.point_top, style.point_left)}
          />
          <div
            className={clsx(style.point, style.point_center, style.point_left)}
          />
          <div
            className={clsx(style.point, style.point_left, style.point_bottom)}
          />
          <div
            className={clsx(style.point, style.point_right, style.point_top)}
          />
          <div
            className={clsx(style.point, style.point_right, style.point_center)}
          />
          <div
            className={clsx(style.point, style.point_right, style.point_bottom)}
          />
        </div>
      </div>
      <div className={clsx(style.face, style.left)}>
        <div className={style.point_wrapper}>
          <div
            className={clsx(style.point, style.point_top, style.point_left)}
          />
          <div className={clsx(style.point, style.point_center_center)} />
          <div
            className={clsx(style.point, style.point_right, style.point_bottom)}
          />
        </div>
      </div>
      <div className={clsx(style.face, style.right)}>
        <div className={style.point_wrapper}>
          <div
            className={clsx(style.point, style.point_top, style.point_left)}
          />
          <div
            className={clsx(style.point, style.point_left, style.point_bottom)}
          />
          <div
            className={clsx(style.point, style.point_right, style.point_top)}
          />
          <div
            className={clsx(style.point, style.point_right, style.point_bottom)}
          />
        </div>
      </div>
      <div className={clsx(style.face, style.top)}>
        <div className={style.point_wrapper}>
          <div
            className={clsx(style.point, style.point_top, style.point_left)}
          />
          <div
            className={clsx(style.point, style.point_bottom, style.point_left)}
          />
          <div
            className={clsx(style.point, style.point_top, style.point_right)}
          />
          <div
            className={clsx(style.point, style.point_bottom, style.point_right)}
          />
          <div className={clsx(style.point, style.point_center_center)} />
        </div>
      </div>
      <div className={clsx(style.face, style.bottom)}>
        <div className={style.point_wrapper}>
          <div
            className={clsx(style.point, style.point_left, style.point_top)}
          />
          <div
            className={clsx(style.point, style.point_right, style.point_bottom)}
          />
        </div>
      </div>
    </div>
  );
};

export { GameCube };
