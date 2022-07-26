package com.company;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Main {

    public static void main(String[] args) {

    }

    public static void solution1(int N, int[] R, int[] C) {
        int[][] result = new int[N][N];
        // draw the B
        for (int i = 0; i < R.length; i++) {
            result[R[i]][C[i]] = -1;
            if (R[i] > 0 && R[i] < N - 1) {
                if (C[i] > 0 && C[i] < N - 1) {
                    if (result[R[i] - 1][C[i]] != -1) {
                        result[R[i] - 1][C[i]]++;
                    }
                    if (result[R[i] - 1][C[i] - 1] != -1) {
                        result[R[i] - 1][C[i] - 1]++;
                    }
                    if (result[R[i]][C[i] - 1] != -1) {
                        result[R[i]][C[i] - 1]++;
                    }
                    if (result[R[i] + 1][C[i]] != -1) {
                        result[R[i] + 1][C[i]]++;
                    }
                    if (result[R[i] + 1][C[i] + 1] != -1) {
                        result[R[i] + 1][C[i] + 1]++;
                    }
                    if (result[R[i]][C[i] + 1] != -1) {
                        result[R[i]][C[i] + 1]++;
                    }
                    if (result[R[i] - 1][C[i] + 1] != -1) {
                        result[R[i] - 1][C[i] + 1]++;
                    }
                    if (result[R[i] + 1][C[i] - 1] != -1) {
                        result[R[i] + 1][C[i] - 1]++;
                    }

                } else if (C[i] == 0) {
                    if (result[R[i] - 1][C[i]] != -1) {
                        result[R[i] - 1][C[i]]++;
                    }
                    if (result[R[i] - 1][C[i] + 1] != -1) {
                        result[R[i] - 1][C[i] + 1]++;
                    }
                    if (result[R[i]][C[i] + 1] != -1) {
                        result[R[i]][C[i] + 1]++;
                    }
                    if (result[R[i] + 1][C[i] + 1] != -1) {
                        result[R[i] + 1][C[i] + 1]++;
                    }
                    if (result[R[i] + 1][C[i]] != -1) {
                        result[R[i] + 1][C[i]]++;
                    }
                } else if (C[i] == N - 1) {
                    if (result[R[i] - 1][C[i]] != -1) {
                        result[R[i] - 1][C[i]]++;
                    }
                    if (result[R[i] - 1][C[i] - 1] != -1) {
                        result[R[i] - 1][C[i] - 1]++;
                    }
                    if (result[R[i]][C[i] - 1] != -1) {
                        result[R[i]][C[i] - 1]++;
                    }
                    if (result[R[i] + 1][C[i] - 1] != -1) {
                        result[R[i] + 1][C[i] - 1]++;
                    }
                    if (result[R[i] + 1][C[i]] != -1) {
                        result[R[i] + 1][C[i]]++;
                    }
                }
            } else if (R[i] == 0) {
                if (C[i] == 0) {
                    if (result[R[i]][C[i] + 1] != -1) {
                        result[R[i]][C[i] + 1]++;
                    }
                    if (result[R[i] + 1][C[i] + 1] != -1) {
                        result[R[i] + 1][C[i] + 1]++;
                    }
                    if (result[R[i] + 1][C[i]] != -1) {
                        result[R[i] + 1][C[i]]++;
                    }
                } else if (C[i] == N - 1) {
                    if (result[R[i]][C[i] - 1] != -1) {
                        result[R[i]][C[i] - 1]++;
                    }
                    if (result[R[i] + 1][C[i] - 1] != -1) {
                        result[R[i] + 1][C[i] - 1]++;
                    }
                    if (result[R[i] + 1][C[i]] != -1) {
                        result[R[i] + 1][C[i]]++;
                    }
                } else if (C[i] < N - 1 && C[i] > 0) {
                    if (result[R[i]][C[i] - 1] != -1) {
                        result[R[i]][C[i] - 1]++;
                    }
                    if (result[R[i] + 1][C[i] - 1] != -1) {
                        result[R[i] + 1][C[i] - 1]++;
                    }
                    if (result[R[i] + 1][C[i]] != -1) {
                        result[R[i] + 1][C[i]]++;
                    }
                    if (result[R[i] + 1][C[i] + 1] != -1) {
                        result[R[i] + 1][C[i] + 1]++;
                    }
                    if (result[R[i]][C[i] + 1] != -1) {
                        result[R[i]][C[i] + 1]++;
                    }
                }
            } else if (R[i] == N - 1) {
                if (C[i] == 0) {
                    if (result[R[i] - 1][C[i]] != -1) {
                        result[R[i] - 1][C[i]]++;
                    }
                    if (result[R[i] - 1][C[i] + 1] != -1) {
                        result[R[i] - 1][C[i] + 1]++;
                    }
                    if (result[R[i]][C[i] + 1] != -1) {
                        result[R[i]][C[i] + 1]++;
                    }
                } else if (C[i] == N - 1) {
                    if (result[R[i] - 1][C[i]] != -1) {
                        result[R[i] - 1][C[i]]++;
                    }
                    if (result[R[i] - 1][C[i] - 1] != -1) {
                        result[R[i] - 1][C[i] - 1]++;
                    }
                    if (result[R[i]][C[i] - 1] != -1) {
                        result[R[i]][C[i] - 1]++;
                    }
                } else if (C[i] < N - 1 && C[i] > 0) {
                    if (result[R[i]][C[i] - 1] != -1) {
                        result[R[i]][C[i] - 1]++;
                    }
                    if (result[R[i] - 1][C[i] - 1] != -1) {
                        result[R[i] - 1][C[i] - 1]++;
                    }
                    if (result[R[i] - 1][C[i]] != -1) {
                        result[R[i] - 1][C[i]]++;
                    }
                    if (result[R[i] - 1][C[i] + 1] != -1) {
                        result[R[i] - 1][C[i] + 1]++;
                    }
                    if (result[R[i]][C[i] + 1] != -1) {
                        result[R[i]][C[i] + 1]++;
                    }
                }
            }
        }

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (result[i][j] == -1) {
                    System.out.print("B");
                } else {
                    System.out.print(result[i][j]);
                }
            }
            System.out.println();
        }
    }


    public static int  solution(int[] A) {
        int lastTrack = -1;
        int secondLastTrack = -1;
        int lbs = 0;
        int tempCount = 0;
        int lastTrackNumberRp = 0;
        for( int x : A){
            if(x == lastTrack || x == secondLastTrack){
                tempCount ++;
            }else{
                tempCount = lastTrackNumberRp +1;
            }
            if( x== lastTrack){
                lastTrackNumberRp ++;
            }else{
                lastTrackNumberRp =1;
                secondLastTrack = lastTrack;
                lastTrack = x;
            }
            lbs = Math.max(tempCount , lbs);

        }
        return lbs;
    }
}
