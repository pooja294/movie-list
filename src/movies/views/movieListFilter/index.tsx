import React, { useMemo, useState } from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";

import { IMovieListFilter, MovieListTypes } from "../../models/movieList";
import useStyles from "./styles";

interface IMovieListFilterProps {
  onSelect: (value?: MovieListTypes) => void;
}

const MovieListFilter: React.FC<IMovieListFilterProps> = (props) => {
  const styles = useStyles();

  const [selectedValue, setSelectedValue] = useState<MovieListTypes>();

  const ledgerFilters: Array<IMovieListFilter> = useMemo(
    () => [
      { label: "All" },
      { label: "Action", value: MovieListTypes.Action },
      { label: "Comedy", value: MovieListTypes.Comedy },
      { label: "Horror", value: MovieListTypes.Horror },
      { label: "Sci-Fi", value: MovieListTypes.SciFi },
      { label: "Romance", value: MovieListTypes.Romance },
      { label: "Korean", value: MovieListTypes.Korean },
      { label: "Anime", value: MovieListTypes.Anime },
    ],
    []
  );

  const onFilterSelect = (value?: MovieListTypes) => {
    setSelectedValue(value);
    props.onSelect(value);
  };

  const renderFilterItem = (item: IMovieListFilter, index: number) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        testID={`${index}`}
        onPress={() => onFilterSelect(item.value)}
        key={index}
      >
        <View
          style={[
            styles.itemStyle,
            selectedValue === item.value && styles.selectedItemStyle,
          ]}
        >
          <Text
            style={[
              styles.labelStyle,
              selectedValue === item.value && styles.selectedLabelStyle,
            ]}
          >
            {item?.label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderFilter = () => (
    <FlatList
      data={ledgerFilters}
      keyExtractor={(item: IMovieListFilter, index) => item?.value + index}
      renderItem={(item: { item: IMovieListFilter; index: number }) =>
        renderFilterItem(item.item, item.index)
      }
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatlistContainer}
    />
  );

  return <View style={styles.container}>{renderFilter()}</View>;
};

export default MovieListFilter;
